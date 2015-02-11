console.log('index.js');

$(function(){

  $('#login-button').on('click', function(e){
  	  	e.preventDefault()
	  	var email = $(".login_email").val();
	  	var pass = $(".login_pass").val();

	    $.ajax({
	      url: 'http://127.0.0.1:3000/sessions',
	      type: 'POST',
	      data: { "email": email, "password": pass}
	    }).done(function(data){
	    	sessionStorage.setItem("token", data["key"]);
	    	sessionStorage.setItem("id", data["id"]);
	    	window.location.href = "./dashboard.html";
	    })
	  
	});
});

