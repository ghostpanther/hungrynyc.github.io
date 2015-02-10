console.log('LINKED');

$(function(){

  $('form').on('submit', function(){
    $.ajax({
      url: 'http://hungrynyc.github.io//sessions',
      type: 'POST',
      data: JSON.stringify({ fname: fname, lname: lname, email: email, password: password }),
      dataType: 'json'
    }).done(function(data){
      console.log('You just signed up!')
      console.log(data);
      window.location.href="../dashboard.html";
    });
  });

});