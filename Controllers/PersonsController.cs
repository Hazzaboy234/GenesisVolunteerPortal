using System.Collections.Generic;
using System.Threading.Tasks;
using GenesisVolunteerPortal.Logic.Database;
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace GenesisVolunteerPortal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonsController : Controller
    {
        private readonly GenesisTrustDatabaseContext _context;
        
        public PersonsController(GenesisTrustDatabaseContext context)
        {
            _context = context;
        }
        
        [HttpGet("/persons/{id}")]
        public async Task<ActionResult> GetPersons(int personId)
        {
            var db = new Database(_context);
            return Ok(JsonConvert.SerializeObject(await db.GetPersonById(personId).ConfigureAwait(true)));
        }
        
        [HttpGet]
        public async Task<List<Persons>> GetAllPersons()
        {
            var db = new Database(_context);
            return await db.GetAllPersons().ConfigureAwait(true);
        }
        
        [HttpPost]
        public async Task PostPersons(Persons person)
        {
            var db = new Database(_context);
            await db.Add(person).ConfigureAwait(true);
        }

        [HttpPut]
        public async Task PutPersons(Persons person)
        {
            var db = new Database(_context);
            await db.Update(person).ConfigureAwait(true);
        }

        [HttpDelete]
        public async Task DeletePersons(Persons person)
        {
            var db = new Database(_context);
            await db.Remove(person).ConfigureAwait(true);
        }
    }
}
