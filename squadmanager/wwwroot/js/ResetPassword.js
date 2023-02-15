

$(document).ready(function () {

    $('#password').on('keyup', function () {

        let emailStr = $('#password').val();
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(emailStr)) {
            $("#password").removeClass("textValidation")
            //return true;
        }
        else {
            $("#password").addClass("textValidation")
            // return false;
        }

        if (
            $('#password').val() !== $('#confirmPassword').val()
            && ($('#password').val() !== null
                && $('#confirmPassword').val() != null)) {

            $('.error span').show();

            //HIDE THE MESSAGE AFTER 2 SECONDS
            setTimeout(() => {
                $('.error span').hide();
            }, 2000);

            return;
        }

    });

    $('#confirmPassword').on('keyup', function () {

        let emailStr = $('#confirmPassword').val();
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(emailStr)) {
            $("#confirmPassword").removeClass("textValidation")
            //return true;
        }
        else {
            $("#confirmPassword").addClass("textValidation")
            // return false;
        }

        


    });

   

});


$('#formReset').on('submit', function (event) {

    event.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    let senha = {
        password: $('#password').val(),
        confirmPassword: $('#confirmPassword').val(),
        id:id,
    }

    if (
        $('#password').val() !== $('#confirmPassword').val()
        && ($('#password').val() !== null
        && $('#confirmPassword').val() != null)) {

        $('.error span').show();

        //HIDE THE MESSAGE AFTER 2 SECONDS
        setTimeout(() => {
            $('.error span').hide();
        }, 2000);

        return;
    }

    $.ajax({
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(senha),
        url: "https://localhost:44378/api/User/reset",
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
});
