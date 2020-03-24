using System;
using System.Collections.Generic;

namespace GenesisVolunteerPortal.Logic.Database.DatabaseModels
{
    public partial class RoleTimes
    {
        public int RoleId { get; set; }
        public DateTimeOffset Time { get; set; }
    }
}
