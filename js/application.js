$(document).ready(function() {
	$('#content').keyup(function(event) {
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#button').click();
		}
	})

	$('#button').click(function() {
		event.preventDefault();
		var value = +$('input#number').val();

	for (var i=1; i <=value; i++) {
		if((i%3==0) && (i%5==0)) {
			$(".content").append("<button class='fizzbuzz'>fizzbuzz</button>");
		}
		else if (i%3==0) {
			$(".content").append("<button class='fizz'>fizz</button>");
		}
		else if (i%5==0) {
			$(".content").append("<button class='buzz'>buzz</button>");
		}
		else {
			$(".content").append("<button class='plain'>" + i + " </button>");
		}
	}

	})
});
