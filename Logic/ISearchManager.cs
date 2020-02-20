using Newtonsoft.Json.Linq;
using System.Threading.Tasks;

namespace GenesisVolunteerPortal.Logic
{
    public interface ISearchManager
    {
        Task<string> SearchPersons(JObject searchTerms);
    }
}