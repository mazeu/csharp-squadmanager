using System;
using API.Validator;
using Commom;
using FluentValidation.Results;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        /// <summary>
        /// Autentica usuario
        /// </summary>
        /// /// <param name="user">username e senha do usuario</param>
        /// <returns>OK</returns>
        [HttpPost]
        public IActionResult Login(UserModel user)
        {
            if (user.Password == "123")
            {
                return Ok(new { response = "ok" });
            }
            else
            {
                return Ok(new { response = "Error" });
            }
          
        }
        /// <summary>
        /// Api para criação de usuario
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        [HttpPost("create")]
        public IActionResult Create(UserModel user)
        {

            UserValidator validator = new UserValidator();

            ValidationResult results = validator.Validate(user);

            if (!results.IsValid)
            {
                foreach (var failure in results.Errors)
                {
                    Console.WriteLine("Property " + failure.PropertyName + " failed validation. Error was: " + failure.ErrorMessage);
                }
            }


            if (user.Password == "123")
            {
                return Ok(new { response = "ok" });
            }
            else
            {
                return Ok(new { response = "Error" });
            }

        }
        /// <summary>
        /// Api para resetar a senha
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [HttpPost("forgot")]
        public IActionResult Forgot([FromBody] string email)
        {
            return Ok(new { response = "ok" });
        }

        /// <summary>
        /// Api para resetar a senha
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [HttpPost("reset")]
        public IActionResult Reset( UserModel user)
        {
            return Ok(new { response = "ok" });
        }
    }
}
