$('.borough').change(function() {
    if($(this)[0].value === 'Brooklyn') {
    	$('.neighborhood').empty();
    	for (i = 0; i < Brooklyn.length; i++) {
			var newOption = $('<option value=' + Brooklyn[i] + '>' + Brooklyn[i] + '</option>');
			$('.neighborhood').append(newOption);
		};
	} else if($(this)[0].value === 'Queens') {
    	$('.neighborhood').empty();
    	for (i = 0; i < Queens.length; i++) {
			var newOption = $('<option value=' + Queens[i] + '>' + Queens[i] + '</option>');
			$('.neighborhood').append(newOption);
		};
	} else if($(this)[0].value === 'Manhatten') {
    	$('.neighborhood').empty();
    	for (i = 0; i < Manhatten.length; i++) {
			var newOption = $('<option value=' + Manhatten[i] + '>' + Manhatten[i] + '</option>');
			$('.neighborhood').append(newOption);
		};
	} else if($(this)[0].value === 'Bronx') {
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