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
    public class RolesController : Controller
    {
        private readonly GenesisTrustDatabaseContext _context;
        
        public RolesController(GenesisTrustDatabaseContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public ActionResult GetRoles(int roleId)
        {
            var db = new Database(_context);
            return Ok(JsonConvert.SerializeObject(db.GetRoleById(roleId)));
        }

        [HttpPost]
        public void PostRoles(Roles role)
        {
            var db = new Database(_context);
            db.Add(role);
        }

        [HttpPut]
        public void PutRoles(Roles role)
        {
            var db = new Database(_context);
            db.Update(role);
        }
        // public IEnumerable<Role> Role()
        // {
        //     return Ok();
        // }
        
        
    }
}
