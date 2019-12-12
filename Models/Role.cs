using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenesisVolunteerPortal.Models
{
    public class Role
    {
        String Title { get; set; }

        String Description { get; set; }

        String AssociatedProject { get; set; }

        String Location { get; set; }

        String Time { get; set; }

        String Hours { get; set; }

        String Image { get; set; }

        String ApplicationCode { get; set; }

        int RoleID { get; set; }
    }
}
