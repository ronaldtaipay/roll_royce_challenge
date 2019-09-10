using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkRequestInput.Models.WorkRequestInput;

namespace WorkRequestInput {
    public class WRIDbContext:DbContext {
        public WRIDbContext(DbContextOptions<WRIDbContext> options)
                : base(options) { }
        public DbSet<Department> Departments { get; set; }
        public DbSet<WRICard> WRICards { get; set; }
        public DbSet<TaskRequestTitle> TaskRequestTitles { get; set; }
        public DbSet<Project> Projects { get; set; }
    }
}
