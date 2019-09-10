using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkRequestInput.Models.WorkRequestInput;

namespace WorkRequestInput.Models.DropdownEdit {
    public class ProjectsViewModel {
        public Project project { get; set; }
        public PaginatedList<Project> projects{get;set;}
    }
}
