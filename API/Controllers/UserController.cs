using Commom;
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
    }
}
