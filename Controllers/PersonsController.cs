using System.Collections;
using System.Collections.Generic;
using GenesisVolunteerPortal.Logic.Database;
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using GenesisVolunteerPortal.Models;
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
        
        [HttpGet]
        public ActionResult GetPersons(int personId)
        {
            var db = new Database(_context);
            return Ok(JsonConvert.SerializeObject(db.GetPersonById(personId)));
        }

        [HttpPost]
        public void PostPersons(Persons person)
        {
            var db = new Database(_context);
            db.Add(person);
        }

        [HttpPut]
        public void PutPersons(Persons person)
        {
            var db = new Database(_context);
            db.Update(person);
        }
        // public IEnumerable<Person> Person()
        // {
        //     return Ok();
        // }
        
        
    }
}
