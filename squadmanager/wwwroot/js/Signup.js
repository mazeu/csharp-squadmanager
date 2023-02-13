

$(document).ready(function () {

    //AMOUNT OF LETTERS VALIDATION
    $("#username").on('keyup', function () {

        if ($("#username").val().length < 5) {
            $("#username").addClass("textValidation")
        } else {
            $("#username").removeClass("textValidation")
        }

        //NOT PERMIT SPECIALS CHARACTERS
        let str = $('#username').val();
        str = str.toUpperCase();
        str = str.replace('Ç', 'C');

        let res = str.replace('#', '');
        $('#username').val(res);

    });

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


function login(event) {
    event.preventDefault();
    if ($('#password').val() !== $('#confirmPassword').val() && ($('#password').val() !== null && $('#confirmPassword').val() != null)) {
        $('.error span').show();

        //HIDE THE MESSAGE AFTER 2 SECONDS
        setTimeout(() => {
            $('.error span').hide();
        }, 2000);

        return;
    }
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
