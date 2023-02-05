using Microsoft.AspNetCore.Mvc;
using squadmanager.Models;

namespace squadmanager.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            UserViewModel user = new UserViewModel();
           
            return View("Index", user);
        }

        [HttpPost]
        public IActionResult Test(UserViewModel user)
        {
            
            user.Email = "email enviado";
            return View("Index", user);
        }
    }
}
