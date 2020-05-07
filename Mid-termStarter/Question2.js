function onLoad() {
  let number = document.getElementById('answer');
  number.action() = calculate();
}


function calculate() {

    var input = document.getElementById("input").value;

    var kg = document.getElementById("kg").value;

    var res;

    if(document.getElementById("kg").value == "poundstokg"){
      res= input* 0.45359;
    } else if (document.getElementById("kg").value == "kgtopounds") {
      res = input*2.2045;
    }


    document.getElementById("answer").innerHTML = res;
}
