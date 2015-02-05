console.log('JS and JQ loaded!')

function test(){
	$.ajax('https://powerful-falls-2281.herokuapp.com/', {
		type: 'GET',
		dataType: 'json'
	}).done(function(data){
		console.log(data)
	});
};

test();