var wakeup = setInterval(function() {
			$.ajax({
			url: "https://hungrynyc.herokuapp.com/",
			type: "GET",
			dataType: "json"
		}).done(function(data){
			console.log("WAKE UP!")
		})
	}, 600000)