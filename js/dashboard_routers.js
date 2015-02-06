console.log('routes loaded')

function ScrollDown(){
	$('.result').css('position', 'relative') //Change the the 'result' div position to relative
	$('html, body').animate({ // Animate the body of the html to perform the following commands:
        scrollTop: $('.result').offset().top // For 'result' tab, move it to the top of the screen by 750 miliseconds.
    }, 750); 
    $('.selection').delay(750).hide(0); //Aftr 750 miliseconds, hide the 'selection' div.
}

$('document').ready(function(){

	var showResults = function () {
		$('form').submit(function(e){
			e.preventDefault(); 
			console.log('submitted!');
			ScrollDown();
		});
	};

	var allroutes = function() {
	    var route = window.location.hash.slice(2);
      };

    var routes = {
		'/results': showResults
    };

    //
    // instantiate the router.
    //
    var router = Router(routes);

    //
    // a global configuration setting.
    //

    router.configure({
    	on: allroutes
    });

    router.init();
});