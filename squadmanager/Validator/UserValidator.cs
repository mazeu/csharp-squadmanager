using FluentValidation;
using squadmanager.Models;

namespace squadmanager.Validator
{
	public class UserValidator : AbstractValidator<UserViewModel>
    {

        public UserValidator()
        {
            RuleFor(user => user.Username).NotNull();
            RuleFor(user => user.Email).NotNull();
            RuleFor(user => user.Password).NotNull();
        }
      
    }
}
