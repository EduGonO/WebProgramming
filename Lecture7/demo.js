/* Lecture 7 */

function first() {
  var inches = prompt("Enter inches");
  if(inches!=null) {
    var cm = inches*2.54;
  }
  document.write("Inches: " + inches + "<br/>");
  document.write("Cm: " + cm + "<br/>");
}


// first()


let imgObj = null;

function init(){
  imgObj = document.getElementById('myImage');
  imgObj.style.position= 'relative';
  imgObj.style.left = '0px';
}

function moveRight(){
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

window.onload =init;
