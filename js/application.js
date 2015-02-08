$(document).ready(function() {
	$('form').submit(function(e) {
		e.preventDefault();
		var value = +$('input#number').val();
		if(value = NaN) {
			alert("Please enter a number from 1 - 100");
			}
		else {
			for (var i=1; i <=value; i++) {
			if((i%3==0) && (i%5==0)) {
				$("#content").append("<button class='fizzbuzz'>fizzbuzz</button>");
				}
			else if (i%3==0) {
				$("#content").append("<button class='fizz'>fizz</button>");
				}
			else if (i%5==0) {
				$("#content").append("<button class='buzz'>buzz</button>");
				}
			else {
				$("#content").append("<button class='plain'>" + i + " </button>");
				}
			}	
		}		
		
	});
});
