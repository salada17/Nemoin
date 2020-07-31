using Microsoft.AspNetCore.Mvc;

namespace SugarHill.Nemoin.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}