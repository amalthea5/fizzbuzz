$(document).ready(function() {
	for (var i=1; i <=100; i++) {
		if((i%3==0) && (i%5==0)) {
			$(".content").append("fizzbuzz, ").addClass("fizzbuzz");
		}
		else if (i%3==0) {
			$(".content").append("fizz, ").addClass("fizz");
		}
		else if (i%5==0) {
			$(".content").append("buzz, ").addClass("buzz");
		}
		else {
			$(".content").append(i +", ");
		}
	}

});