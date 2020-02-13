namespace GenesisVolunteerPortal.Logic.Database.DatabaseModels
{
    public partial class Roles
    {
        public int RoleId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string AssociatedProject { get; set; }
        public string Location { get; set; }
        public string Hours { get; set; }
        public string Image { get; set; }
        public string ApplicationCode { get; set; }
    }
}
