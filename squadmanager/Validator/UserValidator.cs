using FluentValidation;
using squadmanager.Models;

namespace squadmanager.Validator
{
	public class UserValidator : AbstractValidator<UserViewModel>
    {

        public UserValidator()
        {
            RuleFor(user => user.Username).NotNull();
            RuleFor(user => user.Email).NotNull().WithMessage("O email esta vazio!");
            RuleFor(user => user.Email).EmailAddress().WithMessage("O email esta invalido! Por favor, digite o endereço correto.");
            RuleFor(user => user.Password).NotNull().WithMessage("Digite o password!");
        }
      
    }
}
