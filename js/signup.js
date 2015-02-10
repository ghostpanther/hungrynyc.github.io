console.log('LINKED');

$(function(){

  $('#login-form').on('submit', function(){
    var first = $("input[name='first']").val()
    var last = $("input[name='last']").val()
    var email = $("input[name='email']").val()
    var password = $("input[name='password']").val()
    $.ajax({
      url: 'http://127.0.0.1:3000/sessions',
      type: 'POST',
      data: { "f_name": first, "l_name": last, "email": email, "password": password },
      dataType: 'json'
    }).done(function(data){
      console.log('You just signed up!')
      console.log(data);
      window.location.href="../dashboard.html";
    });
  });

});