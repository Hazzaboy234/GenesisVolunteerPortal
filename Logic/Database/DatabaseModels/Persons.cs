using System;

namespace GenesisVolunteerPortal.Logic.Database.DatabaseModels
{
    public partial class Persons
    {
        public int PersonId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public DateTime DoB { get; set; }
        public string NationalInsurance { get; set; }
        public bool BanStatus { get; set; }
        public bool SanctionStatus { get; set; }
        public string Dbscheck { get; set; }
        public string MedicalInfo { get; set; }
        public byte CommunicationPreference { get; set; }
        public string MobileNumber { get; set; }
        public string HomeNumber { get; set; }
        public string ProfileImage { get; set; }
        public string Role { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public string Postcode { get; set; }
        public string Gender { get; set; }
        public bool EmailConfirmed { get; set; }
    }
}
