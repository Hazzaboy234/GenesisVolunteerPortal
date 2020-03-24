using System;
using System.Collections.Generic;

namespace GenesisVolunteerPortal.Logic.Database.DatabaseModels
{
    public partial class Roles
    {
        public int RoleId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int AssociatedProject { get; set; }
        public string Location { get; set; }
        public byte Hours { get; set; }
        public string Image { get; set; }
        public int ApplicationCode { get; set; }
    }
}
