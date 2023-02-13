using Commom;
using FluentValidation;

namespace API.Validator
{
    public class UserValidator : AbstractValidator<UserModel>
    {

        public UserValidator()
        {
            RuleFor(user => user.Username).NotNull().WithMessage("Username vazio!");
            RuleFor(user => user.Email).NotNull().WithMessage("O email esta vazio!");
            RuleFor(user => user.Email).EmailAddress().WithMessage("O email esta invalido! Por favor, digite o endereço correto.");
            RuleFor(user => user.Password).NotNull().WithMessage("Digite o password!");
            RuleFor(user => user.Password).Equal(o => o.ConfirmPassword).NotNull().WithMessage("Senha diferentes, verifique por favor");
        }

    }
}
