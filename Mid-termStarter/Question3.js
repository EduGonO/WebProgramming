(function() {
	"use strict";
    window.onload = function() {
        document.getElementById("blend").onclick = blend;
    }

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function blend() {

  var input = document.getElementById("yourname").value;

  while(document.getElementsByClassName('letter')[0]) {
    document.getElementsByClassName('letter')[0].remove();
  }

  input = input.toString()

  var name = [];

  var x = 15;
  var y = 15;

  for(var i = 0; i < input.length; i++){

    name[i] = input.charAt(i);
    console.log(name[i]);

    var box = document.getElementById("output");
    var letter = document.createElement("DIV");
    var res = document.createTextNode(name[i]);
    letter.appendChild(res);
    box.appendChild(letter);
    letter.setAttribute("Id", name[i]);
    letter.setAttribute("Class", "letter");

    letter.style.position = "absolute";

    if(document.getElementById("sequential").checked == true) {

      letter.style.left = x+'px';
      letter.style.top = y+'px';

      y = y+15;
      x = x+15;
    }

    if(document.getElementById("random").checked == true) {
      letter.style.left = getRandom(0, 300)+'px';
      letter.style.top = getRandom(0, 100)+'px';
    }

    var font = document.getElementById("font").value;

    if(font == 'Arial'){
      letter.style.fontFamily = "Arial";
    } else if(font == 'Comic Sans MS'){
      letter.style.fontFamily = "Comic Sans MS";
    } else if(font == 'Times New Roman'){
      letter.style.fontFamily = "Times New Roman";
    }

  }
}

})();
