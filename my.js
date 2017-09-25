
//loads document jQuery and says ready in the console when j query is uploaded
$(document).ready(function() {
	console.log('ready');

//orginal code I tried - did not work but saved for refernce
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

	//make mario head move on click
//select mario head
//set click function to key 'a'
// set keystroke a to move mario head 10px each click

 $(document).keydown(function(e){

 	var positionL = $('.luigi').position();//luigis position
 	var positionM = $('.mario').position();//marios position

 	switch (e.keyCode)
 		{
 			case 65: // a
 			$('.luigi').css('left', positionL.left + 20 + 'px');
 			break;
 			//this says the div with the class of lugi will move when a is pressed 20px to the left
 			//it acives the movement by adjusting the  Css styling accordingly
 			case 76: //l
 			$('.mario').css('left', positionM.left + 20 + 'px');
 			break;
 			//mario works the same way as luigi but it moves with the L key
 		}

 	$(function() {

 		if (positionM === 1000) {
 			alert('Mario wins!');

 		} else if (positionL === 1000) { 
 			alert('Luigi wins!');

 		}

 	});
 	
 });


//var mario = $('.mario');
//var luigi = $('.luigi');


//win condition
//when one div reaches 51 clicks that div wins
// or when one div crosses anothe div that one wins


});


// winner annouced after 51 clicks - how many clicks it takes to get to the end of the page
// either div is touching the end annouce mario or luigi wins





