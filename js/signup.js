console.log('LINKED');

$(function(){

  $('form').on('submit', function(){
    $.ajax({
      url: 'https://127.0.0.1:3000/sessions',
      type: 'POST',
      data: JSON.stringify({ f_name: first, l_name: last, email: email, password: password }),
      dataType: 'json'
    }).done(function(data){
      debugger
      console.log('You just signed up!')
      console.log(data);
      window.location.href="dashboard.html";
    });
  });

});