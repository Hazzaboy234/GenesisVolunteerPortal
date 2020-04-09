using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GenesisVolunteerPortal.Logic;
using GenesisVolunteerPortal.Logic.Database;
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GenesisVolunteerPortal.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EventsController : Controller
    {
        private readonly GenesisTrustDatabaseContext _context;
        private readonly IDatabase _database;
        private readonly ISearchManager _searchManager;

        public EventsController(GenesisTrustDatabaseContext context, IDatabase database, ISearchManager searchManager)
        {
            _context = context;
            _database = database;
            _searchManager = searchManager;
        }

        /*[HttpGet]
        public async Task<List<Events>> GetAllEvents()
        {
            //return await _database.GetAllEvents().ConfigureAwait(true);
        }*/
    }
}