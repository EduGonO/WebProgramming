(function() {
	"use strict";
    window.onload = function() {
        document.getElementById("add").onclick = addItem;
        document.getElementById("remove").onclick = removeItem;
    }

  var count = 0;

	function addItem(){

    var input = document.getElementById("item").value;

    var box = document.createElement("LI");
    var res = document.createTextNode(input);
    box.appendChild(res);
    document.getElementById("list").appendChild(box);

    box.setAttribute("Id", input.toUpperCase());

		console.log(count);

    if(count%2==0) {
      document.getElementById(input.toUpperCase()).style.backgroundColor = "yellow";
    }

    count++;

    }

  function removeItem() {
    var input = document.getElementById("item").value.toUpperCase();

		document.getElementById(input).outerHTML = "";

		count--;
		console.log(count);

  }


})();
