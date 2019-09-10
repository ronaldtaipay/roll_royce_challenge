using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkRequestInput.Models.WorkRequestInput {
    public class WorkRequestViewModel {
       public WRI WRI { get; set; }
       public WRICard WRICard  { get; set; }
       //public TaskRequestTitle TaskRequestTitle { get; set; }
    }

    //public class Project {
    //    [Display(Name = "Project ID")]
    //    public int ID { get; set; }

    //    public DateTime Date { get; set; }
        
    //    [Display(Name = "Task Priority")]
    //    public string PriorityType { get; set; }
       
    //    [Display(Name = "Task Name")]
    //    public string TaskName { get; set; }

    //    [Display(Name = "Task Description")]
    //    public string TaskDescription { get; set; }

    //    public DateTime Deadline { get; set; }

    //}
    
}
