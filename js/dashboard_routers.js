console.log('routes loaded');

// *****PAGE FUNCTIONS*******

var seconds = 5;
var timerId;
var result_counter = 0;

function UpdateTime() {
    seconds--;
    $('.timer')[0].innerText = seconds;
    if (seconds <= 0) {
        clearInterval(timerId);
        GenerateResult();
    }; 
};

function StartTimer() {
    seconds--;
    $('.timer')[0].innerText = seconds;
    timerId = setInterval(UpdateTime, 1000);
}

function GenerateResult (){
    result_counter += 1;
    seconds = 5;
    if (result_counter != 4) {
        console.log(result_counter);
        $.ajax({
            url: 'https://hidden-ravine-3378.herokuapp.com/users',
            method: 'GET'
        }).done(function(rest) {
            $('.name')[0].innerText = rest.name;
            $('.address')[0].innerText = "Fake Street Name";
            $('.rating')[0].attr("src", rest.rating_img_url);
            $('.phone')[0].innerText = rest.phone;
        })
        StartTimer();
    } else {
        $('.timer')[0].innerText = 'Your going here!';
        console.log('Success!')
    }
}

function ScrollDown(){
    $('.result').css('position', 'relative') //Change the the 'result' div position to relative
    $('html, body').animate({ // Animate the body of the html to perform the following commands:
        scrollTop: $('.result').offset().top // For 'result' tab, move it to the top of the screen by 750 miliseconds.
    }, 750); 
    $('.selection').delay(750).hide(0); //Aftr 750 miliseconds, hide the 'selection' div.
}

// *****ROUTE DIRECTOR*******

$('document').ready(function(){

	var showResults = function () {
		$('.search').submit(function(e){
			e.preventDefault(); 
			console.log('submitted!');
			ScrollDown();
            GenerateResult();
		});
	};

    $('.save').submit(function(e){
        e.preventDefault();
        console.log('stopped!') 
        clearInterval(timerId);
    })

	var allroutes = function() {
	    var route = window.location.hash.slice(2);
      };

    var routes = {
		'/results': showResults
    };

    var router = Router(routes);

    router.configure({
    	on: allroutes
    });

    router.init();
});