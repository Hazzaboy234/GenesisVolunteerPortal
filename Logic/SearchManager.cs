using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GenesisVolunteerPortal.Logic.Database;
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.AspNetCore.Server.IIS;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace GenesisVolunteerPortal.Logic
{
    public class SearchManager : ISearchManager
    {
        private readonly IDatabase _database;
        //async Task<List<Persons>>
        private readonly string[] _personKeys = {"name", "email"};

        public SearchManager(IDatabase database)
        {
            _database = database;
        }
        public string SearchPersons(JObject searchTerms)
        {
            StringBuilder query = new StringBuilder("SELECT * FROM Persons WHERE");
            bool flag = false;
            foreach (var keyValuePair in searchTerms)
            {
                if (_personKeys.Contains(keyValuePair.Key))
                {
                    query.Append($" {keyValuePair.Key} = '{keyValuePair.Value}' AND");
                    flag = true;
                }
            }

            if (!flag)
            {
                return null;
            }
            
            query.Length -= 3;
            Console.WriteLine(query.ToString());
            return JsonConvert.SerializeObject(_database.SearchPersons(query.ToString()).Result);
        }
    } 
}