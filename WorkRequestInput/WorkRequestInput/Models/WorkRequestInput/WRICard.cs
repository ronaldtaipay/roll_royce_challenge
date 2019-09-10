using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WorkRequestInput.Models.WorkRequestInput {
    public class WRICard {
        public WRICard() {
            Departments = new List<Department>() {
                 new Department() { id = 1,name="Sales Dep." },
                 new Department() { id = 2, name = "Customer Dep." },
                  new Department() { id = 3, name = "Engine Dep." },
                   new Department() { id = 4, name = "Cokpit Dep." },
                   new Department() { id = 5, name = "Management Dep." },
        };
   
        }

        [Display(Name = "Card ID")]
        public int ID { get; set; }

        [Display(Name = "Create Time")]
        public DateTime CreateTime { get; set; }

        [Display(Name = "Task Request Title")]
        public List<TaskRequestTitle> TaskRequestTitles { get; set; }

        [Display(Name = "Assigned To")]
        public int AssignedToID { get; set; }

        [Display(Name = "Work Request ID")]
        public int WRIID { get; set; }
        
        [Display(Name = "Task Card Detail")]
        public string Detail { get; set; }

        [Required]
        [Display(Name ="Department")]
        public int Department { get; set; }

        public List<Department> Departments { get; set; }
        
        [Display(Name = "Completed")]
        public bool Completed { get; set; }

    }
    
}
