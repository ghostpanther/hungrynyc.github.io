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
            var seconds = 15;
                    var counter = setInterval(timer, 1000);
                    $('.timer')[0].innerText = seconds;
                    timer();
                    function timer() {
                        seconds--;
                        $('.timer')[0].innerText = seconds;
                        if (seconds <= 0) {
                         clearInterval(counter);
                         console.log('yayyyyyyy');
                        };
                    };
            $.ajax({
                url: 'https://hidden-ravine-3378.herokuapp.com/users',
                method: 'GET'
                }).done(function(rest) {
                    $('.name')[0].innerText = rest.name;
                    $('.address')[0].innerText = "Fake Street Name";
                    $('.rating')[0].attr("src", rest.rating_img_url);
                    $('.phone')[0].innerText = rest.phone;
             })
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