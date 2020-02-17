using Newtonsoft.Json.Linq;

namespace GenesisVolunteerPortal.Logic
{
    public interface ISearchManager
    {
        string SearchPersons(JObject searchTerms);
    }
}