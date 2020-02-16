using GenesisVolunteerPortal.Logic.Database;
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GenesisVolunteerPortal.Controllers
{
    public class ProjectsController : Controller
    {
        private readonly GenesisTrustDatabaseContext _context;
        private readonly Database _database;

        public ProjectsController(GenesisTrustDatabaseContext context, Database database)
        {
            _context = context;
            _database = database;
        }

        [HttpGet("/projects/{id}")]
        public async Task<ActionResult> GetProjects(int projectId)
        {
            return Ok(JsonConvert.SerializeObject(await _database.GetPersonById(projectId).ConfigureAwait(true)));
        }

        [HttpGet]
        public async Task<List<Projects>> GetAllProjects()
        {
            return await _database.GetAllProjects().ConfigureAwait(true);
        }

        [HttpPost]
        public async Task PostProjects(Projects project)
        {
            await _database.Add(project).ConfigureAwait(true);
        }

        [HttpPut]
        public async Task PutProjects(Projects project)
        {
            await _database.Update(project).ConfigureAwait(true);
        }

        [HttpDelete]
        public async Task DeleteProjects(Projects project)
        {
            await _database.Remove(project).ConfigureAwait(true);
        }
    }
}