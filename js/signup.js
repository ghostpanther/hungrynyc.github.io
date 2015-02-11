console.log('signup.js');

$(function(){

  $('#signup-form').on('submit', function(e){
     e.preventDefault()
    var first = $("input[name='fname']").val()
    var last = $("input[name='lname']").val()
    var email = $("input[name='signup_email']").val()
    var password = $("input[name='signup_password']").val()
    
   $.ajax({
      url: 'http://127.0.0.1:3000/users',
      type: 'POST',
      data: { "f_name": first, "l_name": last, "email": email, "password": password },
      dataType: 'json'
    }).done(function(data){
     
      $.ajax({
        url: 'http://127.0.0.1:3000/sessions',
        type: 'POST',
        data: { "email": email, "password": password}
      }).done(function(data){
        sessionStorage.setItem("token", data["key"]);
        sessionStorage.setItem("id", data["id"]);
        window.location.href = "./dashboard.html";
      })
    })

  });

});