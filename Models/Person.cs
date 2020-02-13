using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        public String Name { get; set; }

        public String Email { get; set; }

        public String PasswordHash { get; set; }

        public DateTime DoB { get; set; }

        public String NationalInsurance { get; set; }

        public bool BanStatus { get; set; }

        public String SanctionStatus { get; set; }

        public String DBSCheck { get; set; }

        public String MedicalInfo { get; set; }

        public Byte CommunicationPreference { get; set; }

        public String MobileNumber { get; set; }

        public String HomeNumber { get; set; }

        public String ProfileImage { get; set; }

        public PersonRole Role { get; set; }

        public String AddressLine1 { get; set; }
        
        public String AddressLine2 { get; set; }

        public String City { get; set; }

        public String Postcode { get; set; }

        public PersonGender Gender { get; set; } 

        public String Description { get; set; }


    }
}
