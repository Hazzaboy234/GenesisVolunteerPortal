using System.Collections.Generic;

namespace GenesisVolunteerPortal.Models
{
    public class Role
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public int AssociatedProject { get; set; }

        public string Location { get; set; }

        public List<string> Time { get; set; }

        public byte Hours { get; set; }

        public string Image { get; set; }

        public int ApplicationCode { get; set; }

        public int RoleID { get; set; }
    }
}
