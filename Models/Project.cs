using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenesisVolunteerPortal.Models
{
    public class Project
    {
        String Title { get; set; }

        String Description { get; set; }

        String AssociatedMembers { get; set; }

        String Location { get; set; }

        String Dates { get; set; }

        String ProjectManager { get; set; }

        int ProjectID { get; set; }
    }
}
