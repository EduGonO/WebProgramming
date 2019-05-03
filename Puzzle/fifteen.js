var holeX = '300px';
var holeY = '300px';

window.onload=function(){

  createBoard();
  document.getElementById("shufflebutton").onclick = shuffle;

}

function getRandom(min, max) {
  return Math.floor(Math.random()*(max-min+1))+min;
}

function createBoard() {

  var xPos = 0;
  var yPos = 0;

  var area = document.getElementById("puzzlearea");

  for(var k = 0; k<16; k++) {
    var tile = document.createElement("div");
    tile.appendChild(document.createTextNode(k+1));
    area.appendChild(tile);
  }s

  var total = area.getElementsByTagName('div');

  var output = document.getElementById("output");
  var won = document.createElement("div");
  won.classList.add("notwon");
  won.appendChild(document.createTextNode("Congrats! Puzzle Solved!"));
  output.appendChild(won);

  for(var j = 0; j<4; j++) {
    for( var i = 0; i < 4; i++ ) {

      var id = ((j*4)+i);
      total[id].classList.add("tile");
      total[id].id = 'b' + (id+1);
      total[id].style.left = (i * 100) + 'px';
      total[id].style.top = (j*100) + 'px';

      total[id].style.backgroundPosition = xPos + "px" + ' ' + yPos + "px";
      total[id].style.backgroundImage = "url('background.jpg')";

      total[id].onmouseover = function() {
        if(validate(parseInt(this.innerHTML))!=-1) {
          this.classList.add("hover");
        }
      };

      total[id].onmouseout = function() {
        if(validate(parseInt(this.innerHTML))!=-1) {
          this.classList.remove("hover");
        }
      };

      total[id].onclick = function() {
        if(validate(parseInt(this.innerHTML))!=-1) {
          move(parseInt(this.innerHTML));

          if(solved()){
            won.classList.remove("notwon");
            won.classList.add("won");
          } else {
            won.classList.remove("won");
            won.classList.add("notwon");
          }
        }
      };

      xPos = xPos -100;
    }

    xPos = 0;
    yPos = yPos-100;
  }
  document.getElementById('b' +16).remove(); // Deletes the extra Div
}

    /*-------------- Control Everything --------------*/

function solved() {

  var res = true;
  var aux = -100;

  for(var i = 0; i<15; i++) {
    //console.log(i+1);

    var left = parseInt(document.getElementById('b' + (i+1)).style.left);
    var top  = parseInt(document.getElementById('b' + (i+1)).style.top);

    if(i%4==0){
      aux = aux+100;
    }

    if(left != (i%4 * 100) || top != parseInt(aux)) {
      //console.log("nope");
      res = false;
      break;
    }
  }
  return res;
}

function move(i) {

  var left = document.getElementById('b' + i).style.left;
  var top  = document.getElementById('b' + i).style.top;

  //console.log('left: ' + left + ' top: ' + top);

  document.getElementById('b' + i).style.top = holeY;
  holeY = top;
  document.getElementById('b' + i).style.left = holeX;
  holeX = left;

  //console.log('HoleX: ' + holeX + ' HoleY: ' + holeY);
}

function validate(pos) {

  var top = parseInt(document.getElementById('b' + pos).style.top);
  var left = parseInt(document.getElementById('b' + pos).style.left);

  // Hole on Top
  if(top - 100 == parseInt(holeY) && left == parseInt(holeX)) {
    return 0;
  } else

  // Hole Down
  if(top + 100 == parseInt(holeY) && left == parseInt(holeX)) {
    return 1;
  } else

  // Hole to the Right
  if(left + 100 == parseInt(holeX) && top == parseInt(holeY)) {
    return 2;
  } else

  // Hole to the Left
  if(left - 100 == parseInt(holeX) && top == parseInt(holeY)) {
    return 3;
  } else

  return -1;
}

function shuffle() {

  for(var o =0; o<5; o++) {

    var random = getRandom(1, 4);

    switch (random) {

    case 1:

      if(parseInt(holeY) < 300){
        for(var i = 1; i <= 15; i++) {

          var top  = parseInt(document.getElementById('b' + i).style.top);
          var left = parseInt(document.getElementById('b' + i).style.left);

          if(top - 100 == parseInt(holeY) && left == parseInt(holeX)) {
            move(i);
          }
        }
      }
        break;

    case 2:

      if(parseInt(holeY) > 0){

        for(var i = 1; i <= 15; i++) {

          var top  = parseInt(document.getElementById('b' + i).style.top);
          var left = parseInt(document.getElementById('b' + i).style.left);

          if(top + 100 == parseInt(holeY) && left == parseInt(holeX)) {
            move(i);
          }
        }
      }
        break;

    case 3:

        if(parseInt(holeX) > 0){
          for(var i = 1; i <= 15; i++) {

            var top  = parseInt(document.getElementById('b' + i).style.top);
            var left = parseInt(document.getElementById('b' + i).style.left);

            if(left + 100 == parseInt(holeX) && top == parseInt(holeY)) {
              move(i);
            }
          }
        }
          break;

    case 4:

      if(parseInt(holeX) < 300){
        for(var p = 1; p <= 15; p++) {

          var top  = parseInt(document.getElementById('b' + p).style.top);
          var left = parseInt(document.getElementById('b' + p).style.left);

          if(left - 100 == parseInt(holeX) && top == parseInt(holeY)) {
            move(p);
          }
        }
      }
    }
  }
}
