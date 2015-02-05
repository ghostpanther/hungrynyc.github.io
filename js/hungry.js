console.log('JS and JQ loaded!')

function test(){
	$.ajax({
		url: 'https://powerful-falls-2281.herokuapp.com/',
		type: 'GET',
	}).done(function(data){
		console.log(data)
	});
};

test();