$("a").click(function(){
	$(".first").text("");
	$(".second").text("");
	event.preventDefault();
	var randomNumber = 1 + Math.floor(Math.random() * 6);
	var randomNumber2 = 1 + Math.floor(Math.random() * 6);
	$(".first").text(randomNumber);
	$(".second").text(randomNumber2);
});

