console.log('LINKED');

$(function(){

  $('form').on('submit', function(){
    $.ajax({
      url: '',
      type: 'POST',
      data: JSON.stringify({ f_name: first, l_name: last, email: email, password: password }),
      dataType: 'json'
    }).done(function(data){
      console.log('You just signed up!')
      console.log(data);
    });
  });

});