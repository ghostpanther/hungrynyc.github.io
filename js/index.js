console.log('LINKED');

$(function(){

  $('form').on('submit', function(e){
  	e.preventDefault()
  	var email = $('.email').val();
  	var pass = $('.password').val();
  	console.log(email +" " + pass)

	    $.ajax({
	      url: 'http://127.0.0.1:3000/sessions',
	      type: 'POST',
	      data: { "email": email, "password": pass}
	    }).done(function(data){
	    	console.log(data);
	    	sessionStorage.setItem("","")
	    })
	  
	});
});

// $.ajax({
// 	      url: 'http://127.0.0.1:3000/sessions',
// 	      type: 'POST',
// 	      data: { "email": 'zac@example.com', "password": 'fireball'}
// 	    })