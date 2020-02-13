using System.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
namespace GenesisVolunteerPortal.Logic.Database
{
    public class Database : IDatabase
    {
        public Database()
        {

        }
        
        private void Add<T>(T addition)
        {
            using var connection = new GenesisTrustDatabaseContext();
            connection.Add(addition);
            connection.SaveChanges();
        }

        private void Remove<T>(T removal)
        {
            using var connection = new GenesisTrustDatabaseContext();
            connection.Remove(removal);
        }
    }
}
