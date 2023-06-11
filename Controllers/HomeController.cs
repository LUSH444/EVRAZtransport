using EVRAZtransport.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using EVRAZtransport.Models;
using Microsoft.EntityFrameworkCore;

namespace EVRAZtransport.Controllers
{
    public class HomeController : Controller
    {
        private ApplicationContext db;
        public HomeController(ApplicationContext context)
        {
            db = context;
        }

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        //public async Task<IActionResult> Index()
        //{
        //    return View(await db.Movement_Sides.ToListAsync());
        //}

        public IActionResult Index()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}