window.onload = function() {
    setInterval(snowball, 100); //snowballs appear every 100ms
    setInterval(move, 50); // move snowballs every 50 miliseconds
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function snowball() {

  var box = document.createElement("DIV");
  box.setAttribute("Class", "snowball");

  var size = getRandom(1, 3)*10;
  box.style.width = size + 'px';
  box.style.height = size + 'px';
  box.style.left = getRandom(0, 770)+'px';
  document.getElementById("snow-scene").appendChild(box);

}

function move() {

  var x = document.getElementsByClassName("snowball");
  var i;

  pageY = (document.getElementById("snow-scene").offsetHeight)-30;

  for (i = 0; i < x.length; i++) {

    var top = x[i].offsetTop;
    var size = x[i].style.width;

    if(size == "10px") {
      x[i].style.top = (top + 2) + 'px';
    } else if(size == "20px") {
      x[i].style.top = (top + 5) + 'px';
    } else if(size == "30px") {
      x[i].style.top = (top + 10) + 'px';
    }


    if(x[i].offsetTop>pageY) {
      element = document.getElementById("snow-scene");

      element.removeChild(x[i]);
    }
  }

}
