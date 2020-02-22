using System.ComponentModel.DataAnnotations;

namespace GenesisVolunteerPortal.Models
{
    public class LoginAttempt
    {
        [EmailAddress]
        public string UserEmail { get; set; }
        
        public string Password { get; set; }

    }
}