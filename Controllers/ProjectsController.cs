using GenesisVolunteerPortal.Logic.Database;
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
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
        public ActionResult GetProjects(int projectId)
        {
            var db = new Database(_context);
            return Ok(JsonConvert.SerializeObject(db.GetProjectById(projectId)));
        }

        [HttpPost]
        public void PostProjects(Projects project)
        {
            var db = new Database(_context);
            db.Add(project);
        }

        [HttpPut]
        public void PutProjects(Projects project)
        {
            var db = new Database(_context);
            db.Update(project);
        }
    }
}