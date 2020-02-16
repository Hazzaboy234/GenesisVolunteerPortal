using System;
using System.Collections.Generic;
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using GenesisVolunteerPortal.Models;

namespace GenesisVolunteerPortal.Logic
{
    public class RoleManager
    {
        public Role CreateRole(IEnumerable<RoleTimes> times, Roles roles)
        {
            var role = new Role
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
            role.Time = new List<String>();
            foreach(RoleTimes time in times) 
            {
                role.Time.Add(time.Time.Value.Date.ToString());
            }

            return role;
        }
    }
}