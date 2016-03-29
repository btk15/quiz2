$(document).ready(function(){
    var cookie1 = document.cookie;
    var y = cookie1.split(';');
    $("#lis").append(y[0]);
});

function myFunction(){
	$("#lis").empty();
	var url = "http://www.mattbowytz.com/simple_api.json";	
	$.getJSON(url + '?data=quizData', function(data){
		var random = Math.floor((Math.random() * data.data.length));
		$("#lis").append(data.data[random]);	
		$("#change").attr("value", "Change It");
		$("#keep").fadeIn('slow');
		return;
	});
	return false;
}

function myCookie(value){
	document.cookie="state="+value;
	return false;
}

(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouseover');
	$click     = $('.click');
	$sub       = $('.submit');
	$timeout   = $('.timeout');

	$mouseover.on('mouseover', function() {
		$this = $(this);
		$(this).text('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.click('click', function() {
		$(".click").text('Peace Out!')
		$(".click").fadeOut(1500);
		return false;
	});

	$sub.on('submit', function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	})

	$(document).on('ready', function() {
		setTimeout(function(){
			$timeout.fadeIn('slow');
		}, 1000);
	});



})(jQuery);
