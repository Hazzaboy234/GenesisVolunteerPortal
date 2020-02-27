using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using GenesisVolunteerPortal.Models;
using System.Collections.Generic;

namespace GenesisVolunteerPortal.Logic
{
    public class RoleManager
    {
        public Role CreateRole(IEnumerable<RoleTimes> times, Roles roles)
        {
            Role role = new Role
            {
                RoleID = roles.RoleId,
                Title = roles.Title,
                Description = roles.Description,
                AssociatedProject = roles.AssociatedProject,
                Location = roles.Location,
                Hours = roles.Hours,
                Image = roles.Image,
                ApplicationCode = roles.ApplicationCode,
            };
            role.Time = new List<string>();
            foreach (RoleTimes time in times)
            {
                role.Time.Add(time.Time.Value.Date.ToString());
            }

            return role;
        }
    }
}