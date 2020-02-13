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

        int PersonID { get; set; }

        String Name { get; set; }

        String Email { get; set; }

        String PasswordHash { get; set; }

        DateTimeOffset DoB { get; set; }

        String NationalInsurance { get; set; }

        String BanStatus { get; set; }

        String SanctionStatus { get; set; }

        String DBSCheck { get; set; }

        String MedicalInfo { get; set; }

        String CommunicationPreference { get; set; }

        String MobileNumber { get; set; }

        String HomeNumber { get; set; }

        String ProfileImage { get; set; }

        PersonRole Role { get; set; }

        String Address { get; set; }

        String City { get; set; }

        String Postcode { get; set; }

        PersonGender Gender { get; set; } 

        String Description { get; set; }


    }
}
