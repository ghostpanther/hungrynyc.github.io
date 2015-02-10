console.log('LINKED');

$(function(){

  $('#sign-up').on('submit', function(){
    var fname = $("input[name='fname']").val()
    var lname = $("input[name='lname']").val()
    var email = $("input[name='email']").val()
    var password = $("input[name='password']").val()
    $.ajax({
      url: 'http://hungrynyc.github.io/sessions',
      type: 'POST',
      data: JSON.stringify({ f_name: first, lname: last, email: email, password: password }),
      dataType: 'json'
    }).done(function(data){
      console.log('You just signed up!')
      console.log(data);
      window.location.href="../dashboard.html";
    });
  });

});