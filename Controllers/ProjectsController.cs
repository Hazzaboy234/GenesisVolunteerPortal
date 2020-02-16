using GenesisVolunteerPortal.Logic.Database;
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace GenesisVolunteerPortal.Controllers
{
    public class ProjectsController : Controller
    {
        private readonly GenesisTrustDatabaseContext _context;
        
        public ProjectsController(GenesisTrustDatabaseContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult> GetProjects(int projectId)
        {
            var db = new Database(_context);
            return Ok(JsonConvert.SerializeObject(await db.GetProjectById(projectId)));
        }

        [HttpPost]
        public async Task PostProjects(Projects project)
        {
            var db = new Database(_context);
            await db.Add(project);
        }

        [HttpPut]
        public async Task PutProjects(Projects project)
        {
            var db = new Database(_context);
            await db.Update(project);
        }
    }
}