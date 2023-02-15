$(document).ready(function () {

     $('#email').on('keyup', function () {

        let emailStr = $('#email').val();
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(emailStr)) {
            $("#email").removeClass("textValidation")
            //return true;
        }
        else {
            $("#email").addClass("textValidation")
            // return false;
        }

    });

});


function forgot(event) {
    event.preventDefault();
    
    let email = $('#email').val();
     
    

    $.ajax({
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(email),
        url: "https://localhost:44378/api/User/forgot",
        success: function (result) {
            if (result.response == 'ok') {
                alert('Foi enviado um email para criar uma nova senha. Verifique a sua caixa de mensagem')
            } else {
                alert('Erro inesperado.');
            }
        },
        error: function (error) {
            console.log(error);
        }

    })
}
