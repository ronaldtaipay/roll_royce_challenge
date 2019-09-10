using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WorkRequestInput.Models.WorkRequestInput;

namespace WorkRequestInput.Controllers
{
    public class WorkRequestInputController : Controller
    {
        private readonly WRIDbContext _context;
        public WorkRequestInputController(WRIDbContext context) {
            _context = context;
        }
        public IActionResult testView() {
            
            return View();
        }

        [HttpGet]
        public IActionResult Index()
        {
            var model = new WorkRequestViewModel();
            WRICard card = new WRICard();
            card.ID = 1;
            model.WRICard = card;
            return View(model);
        }
        //[HttpPost]
        //public IActionResult Index(CreateViewModel model) {
        //    if (ModelState.IsValid) {
        //        using (var db = _context) {

        //        }
        //    }

        //    return View();
        //}

        [HttpPost]
        public IActionResult CreateNewTask(WorkRequestViewModel model) {
            if (ModelState.IsValid) {
                using (var db = _context) {
                    db.Add(model);
                    db.SaveChanges();
                }
            }

            return View();
        }
    }
}