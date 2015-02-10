console.log('routes loaded');

function VerifyToken() {
    var token = sessionStorage.getItem("token")
    $.ajax({
        url: "https://hidden-ravine-3378.herokuapp.com/sessions",
        type: "GET",
        data: {"token" : token},
        dataType: "json"
    }).done(function(data){
        if (data.response === true) {
            console.log("Success");
        } else {
            $('body').empty();
            var noEntry = $('<h1>YOU ARE NOT AUTHORIZED</h1>')
            $('body').append(noEntry)
        }
    });
}

VerifyToken();


function DeleteToken() {
  var token = sessionStorage.getItem("token");
  var id = sessionStorage.getItem("id");
    $("#logout").on("submit", function(e){
        e.preventDefault();
        $.ajax({
        url: "https://hidden-ravine-3378.herokuapp.com/sessions/"+id,
        type: "DELETE"
        success: function(){
        token = sessionStorage.setItem("token", "");
        window.location.href = "../index.html";
            };
    });
}

DeleteToken();

// *****PAGE FUNCTIONS*******

Queens = ["Astoria" , "Corona" , "East Elmhurst" , "Elmhurst" , "Forest Hills" , "Fresh Pond" , "Glendale" , "Hunters Point" , "Jackson Heights" , "Long Island City" , "Maspeth" , "Middle Village" , "Rego Park" , "Ridgewood" , "Sunnyside" , "Woodside" ]
Manhattan = [ "Battery Park City" , "Bowery" , "Central Park" , "Chinatown" , "Civic Center" , "East Harlem" , "Financial District" , "Flatiron" , "Garment District" , "Gramercy Park" , "Greenwich Village" , "East Village" , "Hamilton Heights" , "Harlem" , "Hell's Kitchen" , "Inwood" , "Kips Bay" , "Lenox Hill" , "Little Italy" , "Lower Eastside" , "Madison Square" , "Manhattan Valley" , "Meatpacking District" , "Midtown" , "Morningside Heights" , "Murray Hill" , "SoHo" , "Stuyvesant Town" , "Sutton Place" , "Times Square" , "Tribeca" , "Turtle Bay" , "Upper Eastside" , "Upper Westside" , "Washington Heights" , "Yorkville" ]
Bronx = [ "Bedford Park" , "Belmont" , "Fordham" , "Kingsbridge" , "Marble Hill" , "Norwood" , "Riverdale" , "University Heights" , "Woodlawn" , "Downtown Bronx" , "East Tremont" , "Highbridge" , "Hunts Point" , "Longwood" , "Melrose" , "Morris Heights" , "Morrisania" , "Mott Haven" , "The Hub" , "Tremont" , "West Farms" , "Allerton" , "Baychester" , "Bronxdale" , "City Island" , "Co-op City" , "Eastchester" , "Edenwald" , "Indian Village" , "Laconia" , "Olinville" , "Morris Park" , "Pelham Gardens" , "Pelham Parkway" , "Van Nest" , "Wakefield" , "Williamsbridge" , "Bronx River" , "Bruckner" , "Castle Hill" , "Clason Point" , "Country Club" , "Edgewater Park" , "Harding Park" , "Parkchester" , "Park Versailles" , "Pelham Bay" , "Soundview" , "Schuylerville" , "Throggs Neck" , "Unionport" , "Westchester Square"]
Brooklyn = [ "Brooklyn Heights" , "Brooklyn Navy Yard" , "Cadman Plaza" , "Clinton Hill" , "Downtown Brooklyn" , "DUMBO" , "Fort Greene" , "Fulton" , "Pacific Park" , "Prospect Heights" , "Vinegar Hill" , "South Brooklyn" , "Bedford" , "Bushwick" , "Greenpoint" , "Williamsburg" , "Crown Heights" , "Ditmas Park" , "Flatbush" , "Prospect Park" , "Bath Beach" , "Bay Ridge" , "Bensonhurst", "Borough Park" , "Dyker Heights" , "Mapleton" , "New Utrecht" , "Sunset Park" , "Barren Island" , "Bergen Beach" , "Canarsie" , "Coney Island" , "Flatlands" , "Gerritsen Beach" , "Gravesend" , "Homecrest", "Marine Park" , "Midwood " , "Mill Basin" , "Plumb Beach" , "Brownsville" , "East New York" , "Highland Park" ]
Staten_island = [ "Annadale" , "Arden Heights" , "Arlington" , "Arrochar" , "Bay Terrace" , "Bloomfield" , "Brighton Heights" , "Bulls Head" , "Castleton" , "Castleton Corners" , "Charleston" , "Chelsea" , "Clifton" , "Concord" , "Dongan Hills" , "Egbertville" , "Elm Park" , "Eltingville" , "Emerson Hill" , "Fort Wadsworth" , "Graniteville" , "Grant City" , "Grasmere" , "Great Kills" , "Greenridge" , "Grymes Hill" , "Hamilton Park" , "Heartland Village" , "Huguenot" , "Lighthouse Hill" , "Livingston" , "Manor Heights" , "Mariners Harbor" , "Meiers Corners" , "Midland Beach" , "New Brighton" , "New Dorp" , "New Springville" , "Oakwood" , "Ocean Breeze" , "Old Place" , "Old Town" , "Pleasant Plains" , "Port Richmond" , "Prince's Bay" , "Randall Manor" , "Richmond Valley" , "Richmondtown" , "Rosebank" , "Rossville" , "Sandy Ground" , "Shore Acres" , "Silver Lake" , "South Beach" , "St. George" , "Stapleton" , "Stapleton Heights" , "Sunnyside" , "Todt Hill" , "Tompkinsville" , "Tottenville" , "Tottenville Beach" , "Travis" , "Ward Hill" , "Westerleigh" , "West New Brighton" , "Willowbrook" , "Woodrow" ]
Categories = [ "Afghan" , "African" , "American (New)" , "American (Traditional)" , "Arabian","Argentin", "Armenian" , "Asian Fusion" , "Australian" , "Austrian" , "Bangladeshi" , "Barbeque" , "Basque" , "Belgian" , "Brasseries" ,  "Brazilian" , "Breakfast & Brunch" , "British" , "Buffets" , "Burgers" , "Burmese" , "Cafes" , "Cafeteria" , "Cajun/Creole" , "Cambodian" , "Cantonese" , "Caribbean" , "Catalan" , "Chicken Shop" , "Chicken Wings" , "Chinese" , "Colombian" , "Comfort Food" , "Creperies" , "Cuban" , "Czech" , "Delis" , "Dim Sum" , "Diners" , "Dominican" , "Egyptian" , "Ethiopian" , "Falafel" , "Fast Food" , "Filipino" , "Fish & Chips" , "Fondue" , "Food Court" , "Food Stands" , "French" , "Gastropubs" , "German" , "Gluten-Free" , "Greek" , "Haitian" , "Halal" , "Hawaiian" ,"Himalayan/Nepalese" , "Hot Dogs" , "Hot Pot" , "Hungarian" , "Iberian" , "Indian" , "Indonesian" , "Irish" , "Italian" , "Japanese" , "Korean" , "Kosher" , "Laotian" , "Latin American" , "Lebanese" , "Live/Raw Food" , "Malaysian" , "Mediterranean" , "Mexican" , "Middle Eastern" , "Modern European" , "Mongolian" , "Moroccan" ,  "Pakistani" , "Persian/Iranian" , "Peruvian" , "Pizza" , "Polish" , "Portuguese" , "Poutineries" , "Puerto Rican" , "Ramen" , "Russian" , "Salad" , "Salvadoran" , "Sandwiches" , "Scandinavian" , "Scottish" , "Seafood" , "Senegalese" , "Shanghainese" , "Singaporean" , "Slovakian" , "Soul Food" , "Soup" , "South African" , "Southern" , "Spanish" , "Sri Lankan" , "Steakhouses" , "Sushi Bars" , "Szechuan" , "Taiwanese" , "Tapas Bars" , "Tapas/Small Plates" , "Teppanyaki" , "Tex-Mex" , "Thai" , "Trinidadian" , "Turkish" , "Ukrainian" , "Uzbek" , "Vegan" ,"Vegetarian" , "Venezuelan" , "Vietnamese" ]

var seconds = 11;
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

function VerifyToken() {
    sessionStorage.getItem("token")
}

function StartTimer() {
    seconds--;
    $('.timer')[0].innerText = seconds;
    timerId = setInterval(UpdateTime, 1000);
}


// function displayInfo(rest) {
//     var phone = rest.phone.slice(0,3) + '-' + rest.phone.slice(3,6) + '-' + rest.phone.slice(6,10);
//     var url = '<a href="' + rest.yelp_website + '">See Yelp Page</a>';

//     $('.name')[0].innerText = rest.name;
//     $('.address')[0].innerText = rest.location[0] + " " + rest.location[1] + " " + rest.location[2];
//     $('.rating').attr("src", rest.rating_image);
//     $('.phone')[0].innerText = phone;
//     $('.yelp_website')[0].innerHTML = url;

//     console.log('info');
// }

function GenerateResult (){
    var neighborhood = $('.neighborhood').val();
    var category = $('.category').val();
    console.log(neighborhood);
    console.log(category);
    result_counter += 1;
    seconds = 11;
    if (result_counter != 4) {
        console.log(result_counter);
        $.ajax({
            url:'https://hidden-ravine-3378.herokuapp.com/histories',
            method: 'GET',
            data: {neighborhood: neighborhood, category: category }
        }).done(function(rest) {
            console.log(rest);

            var join = rest.name.split(" ").join("+");

            $('.google_maps')[0].setAttribute('width', '250');
            $('.google_maps')[0].setAttribute('height', '250');
            $('.google_maps')[0].setAttribute('frameborder', '0');
            $('.google_maps')[0].setAttribute('border', '0');
            $('.google_maps')[0].setAttribute('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyA2VLYojf301gXuW4cPQb682IvtDI2Qgos&q=' + join + ',' + rest.location[0].split(" ").join("+") + '+' + rest.location[2].split(" ").join("+")+ '+NY');

            var phone = rest.phone.slice(0,3) + '-' + rest.phone.slice(3,6) + '-' + rest.phone.slice(6,10);
            var url = '<a href="' + rest.yelp_website + '" target="_blank">See Yelp Page</a>';

            $('.name')[0].innerText = rest.name;
            $('.address')[0].innerText = rest.location[0] + " " + rest.location[1] + " " + rest.location[2];
            $('.rating').attr("src", rest.rating_image);
            $('.phone')[0].innerText = phone;
            $('.yelp_website')[0].innerHTML = url;
        });
        StartTimer();
    } else {
        $('.timer')[0].innerText = "You're eating here!";
        console.log('Success!')
    }
}

function ScrollDown(){
    $('.result').css('position', 'relative') //Change the the 'result' div position to relative
    $('html, body').animate({ // Animate the body of the html to perform the following commands:
        scrollTop: $('.result').offset().top // For 'result' tab, move it to the top of the screen by 750 miliseconds.
    }, 300); 
    $('.selection').delay(500).hide(100); //Aftr 750 miliseconds, hide the 'selection' div.
}

// *****ROUTE DIRECTOR*******

$('document').ready(function(){

    for (i = 0; i < Manhattan.length; i++) {
        var newOption = $('<option value=' + encodeURIComponent(Manhattan[i]) + '>' + Manhattan[i] + '</option>');
        $('.neighborhood').append(newOption);
    };

	var showResults = function () {
        console.log("results hit")
		console.log('submitted!');
		ScrollDown();
        GenerateResult();
	};

    $('.save').submit(function(e){
        e.preventDefault();
        console.log('stopped!') 
        clearInterval(timerId);
    })

    $('.borough').change(function() {
        if($(this).val() === 'Brooklyn') {
            $('.neighborhood').empty();
            for (i = 0; i < Brooklyn.length; i++) {
                var newOption = $('<option value=' + Brooklyn[i] + '>' + Brooklyn[i] + '</option>');
                $('.neighborhood').append(newOption);
            };
        } else if($(this).val() === 'Queens') {
            $('.neighborhood').empty();
            for (i = 0; i < Queens.length; i++) {
                var newOption = $('<option value=' + Queens[i] + '>' + Queens[i] + '</option>');
                $('.neighborhood').append(newOption);
            };
        } else if($(this).val() === 'Manhatten') {
            $('.neighborhood').empty();
            for (i = 0; i < Manhattan.length; i++) {
                var newOption = $('<option value=' + Manhattan[i] + '>' + Manhattan[i] + '</option>');
                $('.neighborhood').append(newOption);
            };
        } else if($(this).val() === 'Bronx') {
            $('.neighborhood').empty();
            for (i = 0; i < Bronx.length; i++) {
                var newOption = $('<option value=' + Bronx[i] + '>' + Bronx[i] + '</option>');
                $('.neighborhood').append(newOption);
            };
        } else {
            $('.neighborhood').empty();
            for (i = 0; i < Staten_island.length; i++) {
                var newOption = $('<option value=' + Staten_island[i] + '>' + Staten_island[i] + '</option>');
                $('.neighborhood').append(newOption);
            };
        }
    });

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