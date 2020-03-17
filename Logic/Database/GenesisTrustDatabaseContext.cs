
using GenesisVolunteerPortal.Logic.Database.DatabaseModels;
using Microsoft.EntityFrameworkCore;

namespace GenesisVolunteerPortal.Logic.Database
{
    public partial class GenesisTrustDatabaseContext : DbContext
    {
        public GenesisTrustDatabaseContext()
        {
        }

        public GenesisTrustDatabaseContext(DbContextOptions<GenesisTrustDatabaseContext> options) : base(options)
        {
        }

        public virtual DbSet<Persons> Persons { get; set; }
        public virtual DbSet<ProjectDate> ProjectDate { get; set; }
        public virtual DbSet<ProjectMember> ProjectMember { get; set; }
        public virtual DbSet<Projects> Projects { get; set; }
        public virtual DbSet<RoleTimes> RoleTimes { get; set; }
        public virtual DbSet<Roles> Roles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Persons>(entity =>
            {
                entity.HasKey(e => e.PersonId);

                entity.Property(e => e.PersonId)
                    .HasColumnName("PersonID")
                    .ValueGeneratedNever();

                entity.Property(e => e.AddressLine1);


                entity.Property(e => e.AddressLine2);

                entity.Property(e => e.City)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Dbscheck)
                    .HasColumnName("DBSCheck")
                    .HasMaxLength(50);

                entity.Property(e => e.DoB).HasColumnType("date");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.HomeNumber)
                    .HasMaxLength(13)
                    .IsUnicode(false);

                entity.Property(e => e.MedicalInfo).HasMaxLength(50);

                entity.Property(e => e.MobileNumber)
                    .IsRequired()
                    .HasMaxLength(13)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.NationalInsurance)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.PasswordHash).IsRequired();

                entity.Property(e => e.PasswordSalt).IsRequired();

                entity.Property(e => e.Postcode)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ProfileImage).IsUnicode(false);

                entity.Property(e => e.Role)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ProjectDate>(entity =>
            {
                entity.HasKey(e => new { e.ProjectId, e.Date });

                entity.Property(e => e.ProjectId).HasColumnName("ProjectID");

                entity.Property(e => e.Date).HasColumnType("datetime");
            });

            modelBuilder.Entity<ProjectMember>(entity =>
            {
                entity.HasKey(e => new { e.ProjectId, e.PersonId });

                entity.Property(e => e.ProjectId).HasColumnName("ProjectID");

                entity.Property(e => e.PersonId).HasColumnName("PersonID");
            });

            modelBuilder.Entity<Projects>(entity =>
            {
                entity.HasKey(e => e.ProjectId);

                entity.Property(e => e.ProjectId)
                    .HasColumnName("ProjectID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Description)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Location)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Manager)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<RoleTimes>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.RoleId).HasColumnName("RoleID");

                entity.Property(e => e.Time).HasColumnType("datetime");
            });

            modelBuilder.Entity<Roles>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Description)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Location)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RoleId).HasColumnName("RoleID");

                entity.Property(e => e.Title)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
