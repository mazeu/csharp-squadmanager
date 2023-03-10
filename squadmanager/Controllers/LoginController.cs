using System;
using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc;
using squadmanager.Models;
using squadmanager.Validator;

namespace squadmanager.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            UserViewModel user = new UserViewModel();

            user.Email = "aaabbb";

            UserValidator validator = new UserValidator();

            ValidationResult results = validator.Validate(user);

            if (!results.IsValid)
            {
                foreach (var failure in results.Errors)
                {
                    Console.WriteLine("Property " + failure.PropertyName + " failed validation. Error was: " + failure.ErrorMessage);
                }
            }

            return View("Index", user);
        }

        public IActionResult Signup()
        {
            return View();
        }

        public IActionResult Forgot()
        {
            return View();
        }
        public IActionResult Reset()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Test(UserViewModel user)
        {
            
            user.Email = "email enviado";
            return View("Index", user);
        }


    }
}
