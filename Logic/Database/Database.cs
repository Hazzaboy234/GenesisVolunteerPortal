using System.Data.SqlClient;
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

        public Roles GetRoleById(int roleId)
        {
            return _context.Roles.Find(roleId);
        }
    }
}
