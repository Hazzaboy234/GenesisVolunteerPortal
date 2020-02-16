using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using GenesisVolunteerPortal.Models;

namespace GenesisVolunteerPortal.Logic
{
    public class Converter
    {
        public Persons ConvertToPersons(Person person)
        {
            return new Persons()
            {
                PersonId = person.PersonID,
                Name = person.Name,
                Email = person.Email,
                PasswordHash = person.PasswordHash,
                AddressLine1 = person.AddressLine1,
                AddressLine2 = person.AddressLine2,
                BanStatus = person.BanStatus,
                City = person.City,
                CommunicationPreference = person.CommunicationPreference,
                DoB = person.DoB


            };

        }
    }
}