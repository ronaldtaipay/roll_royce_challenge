using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WorkRequestInput.Models.WorkRequestInput {
    public class Project {
        [Display(Name = "Project ID")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? id { get; set; }

        [Required]
        [BindRequired]
        [Display(Name = "Project Name")]
        public string name { get; set; }
    }
}
