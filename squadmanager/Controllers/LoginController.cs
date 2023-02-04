using Microsoft.AspNetCore.Mvc;

namespace squadmanager.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View("Index");
        }
    }
}
