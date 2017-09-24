
//load in jQuery
$(document).ready(function(){
	console.log('ready');



});

$('.luigi').on("click", function() {
	console.log("luigi clicked");
	$(this).animate({'left': '+=20px'});
});

$('.mario').keypress(function(e) {
	//var key = e.keyCode;
	//if (e.keyCode === 65){
		if (e.which === 37) {
		console.log("mario clicked");
	//$(this).animate({'left': '+=20px'});
		}
});

//make mario head move on click
//select mario head
//set click function to key 'a'
// set keystroke a to move mario head 10px each click



