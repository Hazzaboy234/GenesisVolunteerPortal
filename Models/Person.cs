using System;

namespace GenesisVolunteerPortal.Models
{
    public class Person
    {
        public enum PersonRole
        {
            Admin, Employee, Ambassador
        }

        public enum PersonGender
        {
            Male, Female, Other, Undisclosed
        }

        public int PersonID { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string PasswordHash { get; set; }

        public DateTime DoB { get; set; }

        public string NationalInsurance { get; set; }

        public bool BanStatus { get; set; }

        public string SanctionStatus { get; set; }

        public string DBSCheck { get; set; }

        public string MedicalInfo { get; set; }

        public byte CommunicationPreference { get; set; }

        public string MobileNumber { get; set; }

        public string HomeNumber { get; set; }

        public string ProfileImage { get; set; }

        public PersonRole Role { get; set; }

        public string AddressLine1 { get; set; }

        public string AddressLine2 { get; set; }

        public string City { get; set; }

        public string Postcode { get; set; }

        public PersonGender Gender { get; set; }

        public string Description { get; set; }


    }
}
