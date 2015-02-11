console.log('signup.js');

$(function(){

  $('#signup-form').on('submit', function(e){
     e.preventDefault()
    var first = $("input[name='fname']").val()
    var last = $("input[name='lname']").val()
    var email = $("input[name='signup_email']").val()
    var password = $("input[name='signup_password']").val()
    
   $.ajax({
      url: ' https://hidden-ravine-3378.herokuapp.com/users',
      type: 'POST',
      data: { "f_name": first, "l_name": last, "email": email, "password": password },
      dataType: 'json'
    }).done(function(data){
        window.location.href = "./index.html";
    })

  });

});