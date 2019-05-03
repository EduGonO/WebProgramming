window.onload = function() {

	document.getElementById("start").onmouseover = startClick;
	document.getElementById("end").onmouseover = overEnd;

	var boundaries = document.querySelectorAll("div#maze div.boundary");

	for (var i = 0; i < boundaries.length; i++) {
		boundaries[i].onmouseover = overBoundary;
	}
};

function overBoundary(event){

	document.getElementById("status").innerHTML = "You lose";
	var boundaries = document.querySelectorAll("div#maze div.boundary");

	for (var i = 0; i < boundaries.length; i++) {
		boundaries[i].classList.add("youlose");
	}
}

var started = -1;

function startClick(){

	started = started*-1;
	console.log(started);

	document.getElementById("status").innerHTML = "Move your mouse over the S to begin.";
	var boundaries = document.querySelectorAll("div#maze div.boundary");

	for (var i = 0; i < boundaries.length; i++) {
		boundaries[i].classList.remove("youlose");
		boundaries[i].classList.remove("youwin");
	}
}

function overEnd(){

	var boundaries = document.querySelectorAll("div#maze div.boundary");

	if(document.getElementById("status").innerHTML == "You Lose...") {
	} else if(started==1){

		document.getElementById("status").innerHTML = "You Win!";
		for (var i = 0; i < boundaries.length; i++) {
			boundaries[i].classList.add("youwin");
		}
	} else {

		document.getElementById("status").innerHTML = "NO CHEATING";

		for (var i = 0; i < boundaries.length; i++) {
			boundaries[i].classList.add("youlose");
		}
	}
}
