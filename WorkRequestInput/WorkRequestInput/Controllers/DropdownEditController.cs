using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkRequestInput.Models.DropdownEdit;
using WorkRequestInput.Models.WorkRequestInput;

namespace WorkRequestInput.Controllers {
    public class DropdownEditController : Controller {
        private readonly WRIDbContext _context;
        
        public DropdownEditController(WRIDbContext context) {
            _context = context;
        }


        public async Task<IActionResult> ProjectsEdit(string sortOrder, string currentFilter, string searchString, int? pageNumber) {
            ViewBag.IdSortParm = String.IsNullOrEmpty(sortOrder) ? "Id" : "";
            ViewBag.NameSortParm = sortOrder == "name" ? "name_desc" : "name";
            
            ViewBag.CurrentSort = sortOrder;
            ProjectsViewModel model = new ProjectsViewModel();

            //如果搜尋字串在分頁期間變更，頁面必須重設為 1，因為新的篩選可能會導致顯示不同的資料。
            //在文字方塊中輸入值並按下[提交] 按鈕時，即會變更搜尋字串。 在此情況下，searchString 參數不是 null。
            if (searchString != null) {
                pageNumber = 1;
            } else {
                searchString = currentFilter;
            }
            ViewBag.CurrentFilter = searchString;
            //==========order Linq====
            var query = from project in _context.Projects
                        select project;

            //========output directly========
            //model.projects = _context.Projects.ToList();

            if (!string.IsNullOrEmpty(searchString)) {
                //query = query.Where(p => p.name.Contains(searchString));//Case sensetive
                query = query.Where(p => p.name.IndexOf(searchString, StringComparison.OrdinalIgnoreCase) >= 0);////Case Insensetive
            }
            

            switch (sortOrder) {
                case "name":
                    query = query.OrderBy(s => s.name);
                    break;
                case "name_desc":
                    query = query.OrderByDescending(s => s.name);
                    break;
                case "Id":
                    query = query.OrderBy(s => s.id);
                    break;
                default:
                    query = query.OrderByDescending(s => s.id);
                    break;
            }
            int pageSize = 5;
            //(pageNumber ?? 1) 運算式表示在它含有值時會傳回值 pageNumber，或在 pageNumber 為 null 時傳回 1。
            model.projects = await PaginatedList<Project>.CreateAsync(query, pageNumber ?? 1, pageSize);

            

            return View(model);
        }

        //Create and Edit
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> ProjectsEdit(ProjectsViewModel p) {
            try {
                if (ModelState.IsValid) {
                    //編輯
                    if (p.project.id != 0 && p.project.id != null) {
                        //var q = from i in _context.Projects
                        //        where i.id == p.project.id
                        //        select i;
                        //q.FirstOrDefault().name = p.project.name;
                        // 使用ViewModel 複製需要的屬性 避免關於大量指派 (overposting) 
                        //這些變更會實作安全性最佳做法來防止大量指派。 框架會產生一個 Bind 屬性，並為模型繫結器建立的實體加上 Modified 旗標，
                        ////新增到實體組。 該程式碼不建議用於許多案例，因為 Bind 屬性會清空 Include 參數未包含的欄位中任何預先存在的資料。
                        Project projetcToUpdate = await _context.Projects.FindAsync(p.project.id);
                        projetcToUpdate.name = p.project.name;
                        await _context.SaveChangesAsync();
                        ViewBag.msg = "Rename Success.";
                        //無作用
                        //if (await TryUpdateModelAsync<Project>(projetcToUpdate, "", s => s.name)) {
                        //    await _context.SaveChangesAsync();
                        //    ViewBag.msg = "Rename Success.";
                        //}


                    }
                    //新增
                    if (p.project.id == null) {
                        var q = from i in _context.Projects
                                where i.name == p.project.name
                                select i;
                        if (q.Count() == 0) {

                            await _context.Projects.AddAsync(p.project);
                            await _context.SaveChangesAsync();
                            ViewBag.msg = "Create Project Success.";
                        } else {
                            ViewBag.msg = "Duplicate Project Name.";
                        }
                    }

                }
            } catch (DbUpdateException) {
                ModelState.AddModelError("", "Unable to save changes. " +
           "Try again, and if the problem persists " +
           "see your system administrator.");
            }

            
            var query = from project in _context.Projects
                        orderby project.id descending
                        select project;
            ProjectsViewModel model = new ProjectsViewModel();

            int pageNumber = 1;
            int pageSize = 5;
            model.projects = await PaginatedList<Project>.CreateAsync(query, pageNumber, pageSize);
            model.project = p.project;

            return View(model);

        }
        //bug CSRF token
        //刪除資料
        public async Task<JsonResult> DelProject(int id) {
            string[] result = new string[2];

            try {
                var db = _context;
                var ProjectToDelete = await _context.Projects.FindAsync(id);
                db.Remove(ProjectToDelete);
                db.SaveChanges();
                result[0] = "Delete Project Success.";
            } catch (Exception ex) {
                result[0] = "Delete Failed.";
            }
          
          
            return new JsonResult(result);
            //return RedirectToAction("");
        }

        public IActionResult DepartmentsEdit() {
            return View();
        }

        public IActionResult TaskRequestTitleEdit() {
            return View();
        }
    }
}