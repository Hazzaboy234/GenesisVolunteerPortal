using System;
using System.Collections.Generic;

namespace GenesisVolunteerPortal.Logic.Database.DatabaseModels
{
    public partial class Events
    {
        public int EventId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
