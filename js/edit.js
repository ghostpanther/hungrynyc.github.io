console.log('LOADED: EDIT FORM JS');

$(function(){

  $('form').on('submit', function(){
    $.ajax({
      url: '',
      type: 'PUT',
      data: JSON.stringify({ f_name: first, l_name: last, email: email, password: password }),
      dataType: 'json'
    }).done(function(data){
      console.log('Profile updated.');
    });
  });

});