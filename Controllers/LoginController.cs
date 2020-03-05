using System.Threading.Tasks;
using GenesisVolunteerPortal.Logic;
using GenesisVolunteerPortal.Logic.Database;
using GenesisVolunteerPortal.Models;
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GenesisVolunteerPortal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : Controller
    {
        private readonly IDatabase _database;
        private readonly IAuthorisationManager _authorisationManager;

        public LoginController(IDatabase database, IAuthorisationManager authorisationManager)
        {
            _database = database;
            _authorisationManager = authorisationManager;
        }

        
        [HttpPost("/login/validate")]
        public async Task<ActionResult> Login(LoginAttempt attempt)
        {
            var response = await _authorisationManager.AuthoriseLogin(attempt);
            if(!response.Verified)
            {
                return Unauthorized(response.ErrorMessage);
            }
            return Ok(response.Token);
        }

        [HttpPost("/register")]
        public async Task<ActionResult> Register(Persons attempt)
        {
            //var response = await _authorisationManager.
            return null;
        }

        [HttpGet("/login/{id}")]
        public string GetPassword(string id)
        {
            return _authorisationManager.GeneratePass(id);
        }
    }
}