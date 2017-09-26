
//loads document jQuery and says ready in the console when j query is uploaded
$(document).ready(function() {
	console.log('ready');


	 var marioClicks = 0;//tracking clicks for mario
	 var luigiClicks = 0; //tracking clicks for luigi

	 $(document).keydown(function(e){

	 	var positionL = $('.luigi').position();//luigis position
	 	var positionM = $('.mario').position();//marios position


	 	switch (e.keyCode) {
 			case 65: // a
	 			$('.luigi').css('left', positionL.left + 20 + 'px');
	 			luigiClicks = luigiClicks+1;
	 			break;
 			//this says the div with the class of lugi will move when a is pressed 20px to the left
 			//it acives the movement by adjusting the  Css styling accordingly
 			case 76: //l
	 			$('.mario').css('left', positionM.left + 20 + 'px');
	 			marioClicks = marioClicks+1;
	 			break;
 				//mario works the same way as luigi but it moves with the L key
	 	}
	 	//win state - the person wins after 50 clicks and an annoucment is made
		function click () {

			if (luigiClicks === 50){
				alert('Luigi wins!');
			} else if (marioClicks === 50) {
				alert('Mario Wins!');
			}
		}

		console.log(luigiClicks);
		console.log(marioClicks);
	 	click();

	 });

	 

});


// winner annouced after 50 clicks - how many clicks it takes to get to the end of the page
// either div is touching the end annouce mario or luigi wins





