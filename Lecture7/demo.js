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


/*
function init(){
  imgObj = document.getElementById('myImage');
  imgObj.style.position= 'relative';
  imgObj.style.left = '0px';
}

function moveRight(){
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
*/


function minNum() {
  let smallest = nums[0];

  for (i = 0; i < nums.length; i++) {
    if(smallest>nums[i]) {
      smallest = nums[i];
    }
  }
  console.log(nums);
  console.log(smallest);
}

function okayClick() {
  alert("booyah");
}

let nums = [-1, 3.2, 12, 15, -4, 1, -12.5, 1, 8]
minNum(nums)
