﻿using System;
using System.Collections.Generic;

namespace GenesisVolunteerPortal.Logic.Database.DatabaseModels
{
    public partial class ProjectDate
    {
        public int ProjectId { get; set; }
        public DateTime Date { get; set; }
    }
}
