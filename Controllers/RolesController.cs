using GenesisVolunteerPortal.Logic.Database;
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace GenesisVolunteerPortal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RolesController : Controller
    {
        private readonly GenesisTrustDatabaseContext _context;
        private readonly Database _database;

        public RolesController(GenesisTrustDatabaseContext context, Database database)
        {
            _context = context;
            _database = database;
        }

        [HttpGet]
        public async Task<ActionResult> GetRoles(int roleId)
        {
            return Ok(JsonConvert.SerializeObject(await _database.GetRoleById(roleId)));
        }

        [HttpPost]
        public async Task PostRoles(Roles role)
        {
            await _database.Add(role);
        }

        [HttpPut]
        public async Task PutRoles(Roles role)
        {
            await _database.Update(role);
        }
    }
}
