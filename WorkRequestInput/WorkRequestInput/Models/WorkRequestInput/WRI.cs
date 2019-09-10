using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkRequestInput.Models.WorkRequestInput {
    public class WRI {
        [Display(Name = "Work Request ID")]
        public int ID { get; set; }

        [Display(Name = "Create Date")]
        public DateTime CreateDate { get; set; }

        [Display(Name = "Project Name")]
        public string ProjectName { get; set; }

        [Display(Name = "Task Priority")]
        public string PriorityType { get; set; }

        [Display(Name = "Task Name")]
        public string TaskName { get; set; }

        [Display(Name = "Task Description")]
        public string TaskDescription { get; set; }


        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [DataType(DataType.Date)]
        public DateTime Deadline { get; set; }

        [Display(Name = "Switch")]
        public bool enabled { get; set; }

    }

    public class PriorityType {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}
