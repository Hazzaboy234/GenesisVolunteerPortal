using GenesisVolunteerPortal.Logic.Database;
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Mail;
using System.Threading.Tasks;
using GenesisVolunteerPortal.Logic;
using Newtonsoft.Json.Linq;

namespace GenesisVolunteerPortal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonsController : Controller
    {
        private readonly GenesisTrustDatabaseContext _context;
        private readonly IDatabase _database;
        private readonly ISearchManager _searchManager;

        public PersonsController(GenesisTrustDatabaseContext context, IDatabase database, ISearchManager searchManager)
        {
            _context = context;
            _database = database;
            _searchManager = searchManager;
        }

        [HttpGet("/persons/{id}")]
        public async Task<ActionResult> GetPersons(int personId)
        {
            return Ok(JsonConvert.SerializeObject(await _database.GetPersonById(personId).ConfigureAwait(true)));
        }

        [HttpPost("/persons/search")]
        public async Task<ActionResult> SearchPersons(JObject json)
        {
            if (!json.HasValues)
            {
                return BadRequest("No search options were provided");
            }
            var results = _searchManager.SearchPersons(json);
            if (results == null)
            {
                return BadRequest("No valid search options were provided");
            }
            return null;
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
