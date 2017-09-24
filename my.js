
//load in jQuery
$(document).ready(function() {
	console.log('ready');

//a keycode
	$('.luigi').keyup(function(e) {
		if (e.keyCode == 65)
		console.log("luigi clicked");
		//$(this).animate({'left': '+=20px'});
	});

//l keycode
	$('.mario').keyup(function(e) {
		if(e.keyCode == 76) 
			console.log("mario");
			//$(this).animate({'left': '+=20px'});
		
	});


});


//make mario head move on click
//select mario head
//set click function to key 'a'
// set keystroke a to move mario head 10px each click



