namespace GenesisVolunteerPortal.Logic.Database.DatabaseModels
{
    public partial class Projects
    {
        public int ProjectId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public string Manager { get; set; }
    }
}
