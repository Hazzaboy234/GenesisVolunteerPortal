using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using GenesisVolunteerPortal.Models;
using System.Threading.Tasks;

namespace GenesisVolunteerPortal.Logic
{
    public interface IAuthorisationManager
    {
        Task<LoginResponse> AuthoriseLogin(LoginAttempt loginAttempt);
        Task<string> CreateJWT(Persons user);
        Task<bool> IsAuthorised(string jwtInput, string role);
        Task<RegistrationResponse> Register(RegistrationAttempt user);
    }
}