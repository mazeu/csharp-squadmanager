function login(event) {
    event.preventDefault();

    let formData = {
        username: $('#username').val(),
        email: $('#email').val(),
        password: $('#password').val(),
        confirmPassword: $('#confirmPassword').val()
    }

    $.ajax({
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(formData),
        url: "https://localhost:44378/api/User/create",
        success: function (result) {
            if (result.response == 'ok') {
                alert('Conta criada!')
            } else {
                alert('Não foi possivel criar a conta. Verifique com o administrador.');
            }
        },
        error: function (error) {
            console.log(error);
        }

    })
}
