using System.ComponentModel.DataAnnotations;

namespace squadmanager.Models
{
    public class UserViewModel
    {
        
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
