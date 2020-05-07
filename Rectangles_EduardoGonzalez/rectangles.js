(function() {
	"use strict";


	window.onload = function() {
	var color = document.getElementById("color");
	color.onclick = colors;

	var move = document.getElementById("move");
	move.onclick = moveIt;

	var count = document.getElementById("count");
	count.onchange = createRectangles;

	createRectangles();
	moveIt();
	};

	// I use this function to get random numbers between two specified ones
	function getRandom(min, max) {
	  return Math.floor(Math.random()*(max-min+1))+min;
	}

	// This function creates the rectangles
	function createRectangles() {

		document.getElementById("rectanglearea").innerHTML = "";
		var count = document.getElementById("count").value;

		var r1 = getRandom(0, 256);
		var r2 = getRandom(0, 256);
		var r3 = getRandom(0, 256);

		// Change the color of H1
		document.getElementById("h1").style.backgroundColor = "rgb("+ r1 +","+ r2 +","+ r3 +")";

		// Create the amnount of triangles specified
		for(var i = 0; i < count; i++) {
			var r = document.createElement("div");
			r.className = "rectangle";
			document.getElementById("rectanglearea").appendChild(r);
		}
	}

	// Randomly color all triangles
	function colors() {

		var r = document.querySelectorAll("#rectanglearea .rectangle");

		for (var i = 0; i < r.length; i++) {

			var r1 = getRandom(0, 256);
			var r2 = getRandom(0, 256);
			var r3 = getRandom(0, 256);

			// Assign random color to rectangles
			var randomColor = "rgb("+ r1 +","+ r2 +","+ r3 +")";

			r[i].style.backgroundColor = randomColor;
		}

	}

	// Move all rectangles
	function moveIt() {

	var r = document.querySelectorAll("#rectanglearea .rectangle");

	var area = document.getElementById("rectanglearea");

	for (var i = 0; i < r.length; i++) {
		r[i].style.position = 'absolute';
		r[i].style.left = getRandom(0, area.offsetWidth - 50) + 'px';
		r[i].style.top = getRandom(0, area.offsetHeight - 50) + 'px';
	}
}


	})();
