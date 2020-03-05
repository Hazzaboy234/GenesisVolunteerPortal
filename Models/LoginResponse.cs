using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenesisVolunteerPortal.Models
{
    public class LoginResponse
    {
        public bool Verified {get;set;}
        public string Token { get; set; }
        public string ErrorMessage { get; set; }

    }
}
