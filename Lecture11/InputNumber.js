function pageLoad() {
  let imput = document.querrySelector('.numberImput');
  let para = document.querrySelector('.p');
  input.onchange = outputNumber;
}

function outputNumber() {

  var e = document.getElementById("myMethods");
  var opt = e.options[e.selectedIndex].value;

  let result;
  if(opt == 1) { // Square
    result = para*para*para;
  } else if(opt == 2) { // Cube
    result = para*para;
  } else if(opt == 3) { // Factorial
    result = para*-1;
  }
  console.log("TEst: ");
  console.log(para);




}
