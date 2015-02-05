console.log("JS and JQ loaded");

$(function(){

	$('form').submit(function(e){
		e.preventDefault();
		console.log('submitted!');
		$('html, body').animate({
    		scrollTop: $('.results').offset().top
		}, 1000);	
	});

});