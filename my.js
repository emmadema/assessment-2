
//load in jQuery
$(document).ready(function() {
	console.log('ready');

//a keycode
	/*$('.luigi').keyup(function(e) {
		if (e.keyCode == 65)
		console.log('luigi clicked');
		//$(this).animate({'left': '+=20px'});
	});

//l keycode
	$('.mario').keyup(function(e){
		alet('a key was pressed');
		if(e.keyCode == 76) {
			console.log('mario');
			//$(this).animate({'left': '+=20px'});
		}
	});*/

 $(document).keydown(function(e){

 	var positionL = $('.luigi').position();
 	var positionM = $('.mario').position();

 	switch (e.keyCode)
 		{
 			case 65: // a
 			$('.luigi').css('left', positionL.left + 20 + 'px');
 			break;

 			case 76: //l
 			$('.mario').css('left', positionM.left + 20 + 'px');
 			break;
 		}
 });
});


//make mario head move on click
//select mario head
//set click function to key 'a'
// set keystroke a to move mario head 10px each click



