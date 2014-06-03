$(document).ready(function (){
	$('.limit').keydown(function(event) {
		if (event.keyCode == 13) {
            fizzbuzz();
         }
    });

    function fizzbuzz() {
		var limit = $('.limit').val();

		for(var i = 1; i <= limit; i++) {
			if (i % 3 === 0 && i % 5 === 0)
			{//append fizzbuzz to DOM and display
				$('.numbers').append("<p>fizzbuzz</p>");
			}
			else if (i % 3 === 0)
			{//append fizz to DOM and display
				$('.numbers').append("<p>fizz</p>");
			}
			else if (i % 5 === 0)
			{//append buzz to DOM and display
				$('.numbers').append("<p>buzz</p>");
			}
			else
			{//append number to DOM and display
				$('.numbers').append("<p>"+i+"</p>");
			}
		}
    }
});