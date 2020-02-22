namespace GenesisVolunteerPortal.Models
{
    public class Project
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public string[] AssociatedMembers { get; set; }

        public string Location { get; set; }

        public string Dates { get; set; }

        public string ProjectManager { get; set; }

        public int ProjectID { get; set; }
    }
}
