function login(event) {
    event.preventDefault();

    let formData = {
        email: $('#email').val(),
        password: $('#password').val()
    }

    $.ajax({
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(formData),
        url: "https://localhost:44378/api/User",
        success: function (result) {
            if (result.response == 'ok') {
                alert('Logado')
            } else {
                alert('Credenciais invalidas!');
            }
        },
        error: function (error) {
            console.log(error);
        }

    })
}
