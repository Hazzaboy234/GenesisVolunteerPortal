using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenesisVolunteerPortal.Models
{
    public class Role
    {
        public String Title { get; set; }

        public String Description { get; set; }

        public String AssociatedProject { get; set; }

        public String Location { get; set; }

        public List<String> Time { get; set; }

        public String Hours { get; set; }

        public String Image { get; set; }

        public String ApplicationCode { get; set; }

        public int RoleID { get; set; }
    }
}
