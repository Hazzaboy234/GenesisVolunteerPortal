using System;
using System.Collections.Generic;

namespace GenesisVolunteerPortal.Logic.Database.DatabaseModels
{
    public partial class ProjectMember
    {
        public int ProjectId { get; set; }
        public int PersonId { get; set; }
    }
}
