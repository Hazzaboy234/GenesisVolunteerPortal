using GenesisVolunteerPortal.Logic.Database;
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using GenesisVolunteerPortal.Models;
using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace GenesisVolunteerPortal.Logic
{
    public class AuthorisationManager : IAuthorisationManager
    {
        private readonly IDatabase _database;
        private readonly string _issuer = "Genesis Trust";
        private readonly string _authority = "Genesis Trust";
        private readonly int _daysValid = 7;
        private readonly string _privateKey = "NwC7n89QKBX2HTPc3N5hEr7yD4GDAJJeEkzuVNpfwcrYWRPsWVtRzPFkZxFypZaHhaC2txZkwB84mF7DKU9dPDgVSWHhKdTHwVvS7UNfYEAd7AtMtnYmfUXwrvk8RM3fQFesq3YN2W8B95Lfzpw3PgywUseyNtAVFUL2F7FDZYznr8tPgK7QNqhjLDW6cCYPKsREEu484upPSCWgyw7pTmjcYLAnmsQwBS4wDkV5BZqY4gVJPrRFbVhUnc5ffEdZ";

        public AuthorisationManager(IDatabase database)
        {
            _database = database;
        }

        public async Task<LoginResponse> AuthoriseLogin(LoginAttempt loginAttempt)
        {
            var response = new LoginResponse();
            var user = await _database.GetPersonByEmail(loginAttempt.UserEmail);
            if (user.Count != 1)
            {
                response.Verified = false;
                response.ErrorMessage = "Invalid Email Or Password";
                return response;
            }

            if (IsPasswordValid(loginAttempt.Password, user.First()) && IsEmailVerified(user.First()))
            {
                response.Verified = true;
                response.Token = await CreateJWT(user.First());
                return response;
            }
            response.Verified = false;
            response.ErrorMessage = "An unknown error has occured";
            return response;
        }

        private bool IsPasswordValid(string password, Persons user)
        {
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
            password: password,
            salt: Encoding.UTF8.GetBytes(user.PasswordSalt),
            prf: KeyDerivationPrf.HMACSHA1,
            iterationCount: 10000,
            numBytesRequested: 256 / 8));
            if (user.PasswordHash == hashed)
            {
                return true;
            }
            return false;
        }

        private string GeneratePass(string password, byte[] salt)
        {
           string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
           password: password,
           salt: salt,
           prf: KeyDerivationPrf.HMACSHA1,
           iterationCount: 10000,
           numBytesRequested: 256 / 8));
            return hashed;
        }

        private bool IsEmailVerified(Persons user)
        {
            if (user.EmailConfirmed)
            {
                return true;
            }
            return false;
        }

        public static Task<ClaimsIdentity> GenerateClaims(Persons user)
        {
            ClaimsIdentity claimsIdentity = new ClaimsIdentity();
            claimsIdentity.AddClaim(new Claim(ClaimTypes.Email, user.Email));
            claimsIdentity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.PersonId.ToString()));
            claimsIdentity.AddClaim(new Claim(ClaimTypes.Name, user.Name));
            claimsIdentity.AddClaim(new Claim(ClaimTypes.Role, user.Role));

            return Task.FromResult(claimsIdentity);
        }

        public async Task<string> CreateJWT(Persons user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var claims = await GenerateClaims(user);

            var token = tokenHandler.CreateJwtSecurityToken(issuer: _issuer,
                audience: _authority,
                subject: claims,
                notBefore: DateTime.UtcNow,
                expires: DateTime.UtcNow.AddDays(_daysValid),
                signingCredentials:
                new SigningCredentials(
                    new SymmetricSecurityKey(
                        Encoding.Default.GetBytes(_privateKey)),
                        SecurityAlgorithms.HmacSha256Signature));

            return tokenHandler.WriteToken(token);
        }

        public static string ReadToken(string jwtInput)
        {
            var jwtHandler = new JwtSecurityTokenHandler();
            var jwtOutput = string.Empty;

            if (!jwtHandler.CanReadToken(jwtInput)) throw new Exception("The token doesn't seem to be in a proper JWT format.");

            var token = jwtHandler.ReadJwtToken(jwtInput);

            var jwtHeader = JsonConvert.SerializeObject(token.Header.Select(h => new { h.Key, h.Value }));
            jwtOutput = $"{{\r\n\"Header\":\r\n{JToken.Parse(jwtHeader)},";

            var jwtPayload = JsonConvert.SerializeObject(token.Claims.Select(c => new { c.Type, c.Value }));
            jwtOutput += $"\r\n\"Payload\":\r\n{JToken.Parse(jwtPayload)}\r\n}}";

            return JToken.Parse(jwtOutput).ToString(Formatting.Indented);
        }

        public static async Task<string> ReadTokenAsync(string jwtInput)
        {
            return await Task.Run(() =>
            {
                return ReadToken(jwtInput);
            });
        }

        public async Task<bool> IsAuthorised(string jwtInput, string role)
        {
            var token = JObject.Parse(await ReadTokenAsync(jwtInput));
            if (token["role"].ToString() == role)
            {
                return true;
            }
            return false;
        }

        public async Task<RegistrationResponse> Register(RegistrationAttempt user)
        {
            var response = new RegistrationResponse();
            if (await UniqueEmail(user.Email))
            {
                var salt = GetSalt();
                var newUser = new Persons
                {
                    Name = user.FirstName + " " + user.LastName,
                    Email = user.Email,
                    PasswordHash = GeneratePass(user.Password, salt),
                    PasswordSalt = Encoding.UTF8.GetString(salt, 0, salt.Length),
                    Role = GetRoleFromCode(user.RegistrationCode)
                };
                await _database.Add(newUser);
                response.Success = true;
                return response;
            }

            response.Success = false;
            response.ErrorMessage = "Email is already being used.";
            return response;
        }

        private async Task<bool> UniqueEmail(string email)
        {
            var users =  await _database.GetPersonByEmail(email);
            return users.Count == 0;
        }
        
        private static int saltLengthLimit = 32;
        private static byte[] GetSalt()
        {
            return GetSalt(saltLengthLimit);
        }
        private static byte[] GetSalt(int maximumSaltLength)
        {
            var salt = new byte[maximumSaltLength];
            using (var random = new RNGCryptoServiceProvider())
            {
                random.GetNonZeroBytes(salt);
            }

            return salt;
        }

        private static string GetRoleFromCode(string code)
        {
            return "User";
        }
    }
}
