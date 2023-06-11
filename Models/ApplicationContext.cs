using EVRAZtransport.Models;
using Microsoft.EntityFrameworkCore;

namespace EVRAZtransport
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Movement_Side> Movement_Sides { get; }
        public DbSet<Models.Route> Routes { get; }
        public DbSet<Bus_Stop> Bus_Stops { get; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) 
        {      
            Database.EnsureCreated();
        }
    }
}
