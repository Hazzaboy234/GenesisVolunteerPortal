using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public async Task Add<T>(T addition)
        {
            _context.Add(addition);
            await _context.SaveChangesAsync().ConfigureAwait(true);
        }

        public async Task Remove<T>(T removal)
        {
            _context.Remove(removal);
            await _context.SaveChangesAsync().ConfigureAwait(true);
        }

        public async Task Update<T>(T update)
        {
            _context.Update(update);
            await _context.SaveChangesAsync().ConfigureAwait(true);
        }

        public async Task<Persons> GetPersonById(int personId)
        {
            return await _context.Persons.FindAsync(personId);

        }

        public async Task<List<Persons>> GetAllPersons()
        {
            return await _context.Persons.ToListAsync().ConfigureAwait(true);
        }

        public async Task<Roles> GetRoleById(int roleId)
        {
            return await _context.Roles.FindAsync(roleId);
        }

        public async Task<List<Roles>> GetAllRoles()
        {
            return await _context.Roles.ToListAsync().ConfigureAwait(true);
        }

        public async Task<List<RoleTimes>> GetRoleTimesByRoleId(int roleId)
        {
            return await _context.RoleTimes.Where(r => r.RoleId == roleId).ToListAsync().ConfigureAwait(true);
        }

        public async Task<Projects> GetProjectById(int projectId)
        {
            return await _context.Projects.FindAsync(projectId);
        }
    }
}
