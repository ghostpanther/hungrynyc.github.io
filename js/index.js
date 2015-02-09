console.log('LINKED');

$(function(){

  $('form').on('submit', function(){
    $.ajax({
      url: 'http://127.0.0.1:3000/sessions',
      type: 'POST',
      data: { "email": $("input[name='email']").value, "password": $("input[name ='password']").value}
    }).done(function(data){
    	console.log(data)
    })
});