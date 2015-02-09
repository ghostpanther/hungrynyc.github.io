console.log('LINKED');

$(function(){

  $('form').on('submit', function(){
    $.ajax({
      url: 'http://127.0.0.1:3000/sessions',
      type: 'POST',
      data: { "email": $('.email')[0].value, "password": $('.password')[0].value}
    })
});