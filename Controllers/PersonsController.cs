using GenesisVolunteerPortal.Logic.Database;
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GenesisVolunteerPortal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonsController : Controller
    {
        private readonly GenesisTrustDatabaseContext _context;
        private readonly IDatabase _database;

        public PersonsController(GenesisTrustDatabaseContext context, IDatabase database)
        {
            _context = context;
            _database = database;
        }

        [HttpGet("/persons/{id}")]
        public async Task<ActionResult> GetPersons(int personId)
        {
            return Ok(JsonConvert.SerializeObject(await _database.GetPersonById(personId).ConfigureAwait(true)));
        }

        [HttpGet("/persons/search")]
        public async Task<List<Persons>> SearchPersons(string name = null, string email = null)
        {
            return await _database.SearchPersons(name, email).ConfigureAwait(true);
        }

        [HttpGet]
        public async Task<List<Persons>> GetAllPersons()
        {
            return await _database.GetAllPersons().ConfigureAwait(true);
        }

        [HttpPost]
        public async Task PostPersons(Persons person)
        {
            await _database.Add(person).ConfigureAwait(true);
        }

        [HttpPut]
        public async Task PutPersons(Persons person)
        {
            await _database.Update(person).ConfigureAwait(true);
        }

        [HttpDelete]
        public async Task DeletePersons(Persons person)
        {
            await _database.Remove(person).ConfigureAwait(true);
        }
    }
}
