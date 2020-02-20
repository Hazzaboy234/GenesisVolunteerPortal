using System.Threading.Tasks;
using GenesisVolunteerPortal.Logic.Database;
using GenesisVolunteerPortal.Models;
using Microsoft.AspNetCore.Mvc;

namespace GenesisVolunteerPortal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : Controller
    {
        private readonly IDatabase _database;

        public LoginController(IDatabase database)
        {
            _database = database;
        }

        public async Task<ActionResult> Login(LoginAttempt attempt)
        {
            return null;
        }
    }
}