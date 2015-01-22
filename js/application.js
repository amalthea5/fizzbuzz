$(document).ready(function() {
	for (var i=1; i <=100; i++) {
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

});