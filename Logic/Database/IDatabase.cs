using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GenesisVolunteerPortal.Logic.Database
{
    public interface IDatabase
    {
        Task Add<T>(T addition);
        Task<List<Persons>> GetAllPersons();
        Task<List<Roles>> GetAllRoles();
        Task<List<Projects>> GetAllProjects();
        Task<Persons> GetPersonById(int personId);
        Task<List<Persons>> SearchPersons(string name, string email);
        Task<Projects> GetProjectById(int projectId);
        Task<Roles> GetRoleById(int roleId);
        Task<List<RoleTimes>> GetRoleTimesByRoleId(int roleId);
        Task Remove<T>(T removal);
        Task Update<T>(T update);
    }
}