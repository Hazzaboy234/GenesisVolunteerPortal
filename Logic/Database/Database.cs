using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using Microsoft.EntityFrameworkCore;
namespace GenesisVolunteerPortal.Logic.Database
{
    public class Database
    {
        private readonly GenesisTrustDatabaseContext _context;

        public Database(GenesisTrustDatabaseContext context)
        {
            _context = context;
        }
        public void Add<T>(T addition)
        {
            _context.Add(addition);
            _context.SaveChanges();
        }

        public void Remove<T>(T removal)
        {
            _context.Remove(removal);
            _context.SaveChanges();
        }

        public void Update<T>(T update)
        {
            _context.Update(update);
            _context.SaveChanges();
        }

        public Persons GetPersonById(int personId)
        {
            return _context.Persons.Find(personId);

        }

        public IEnumerable<Persons> GetAllPersons()
        {
            return _context.Persons;
        }

        public Roles GetRoleById(int roleId)
        {
            return _context.Roles.Find(roleId);
        }

        public IEnumerable<Roles> GetAllRoles()
        {
            return _context.Roles;
        }
        public IEnumerable<RoleTimes> GetRoleTimesByRoleId(int roleId)
        {
            return _context.RoleTimes.Where(r => r.RoleId == roleId);
        }

        public Projects GetProjectById(int projectId)
        {
            return _context.Projects.Find(projectId);
        }
    }
}
