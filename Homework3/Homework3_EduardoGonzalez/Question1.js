function onLoad() {
  let number = document.getElementById('Frequent');
  number.action() = count();

  let result = document.getElementById('compute');
  result.action() = compute();
}


function count() {

    var arre = [1, 2, 3, 4, 1, 2, 3, 1, 2, 1];

    var count = 1;
    var tempCount;
    var popular = arre[0];
    var temp = 0;

    for (var i = 0; i < (arre.length - 1); i++) {
      temp = arre[i];
      tempCount = 0;
      for (var j = 1; j < arre.length; j++) {
        if (temp == arre[j]){
          tempCount++;
        }
      }
      if (tempCount > count) {
        popular = temp;
        count = tempCount;
      }
    }
    document.getElementById("Frequent").innerHTML = popular;
}

function compute() {

  g1 = (100*document.querySelector(".earned1").value/document.querySelector(".max1").value);
  g2 = (100*document.querySelector(".earned2").value/document.querySelector(".max2").value);
  g3 = (100*document.querySelector(".earned3").value/document.querySelector(".max3").value);

  avGrade = Math.round((g1+g2+g3)/3);

  if(document.getElementById("curve").checked==true) {
    if(avGrade<95) {
      avGrade+=5;
    } else {
      avGrade = 100;
    }
  }

  var box = document.createElement("P");
  var res = document.createTextNode(avGrade);
  box.appendChild(res);
  document.getElementById("resultsarea").appendChild(box);

  box.setAttribute("Id", "result")

  if(avGrade >= 60) {
    box.setAttribute("class", "pass");
  } else {
    box.setAttribute("class", "fail");
  }
}

function clearClick() {

  document.getElementById("e1").value = "";
  document.getElementById("e2").value = "";
  document.getElementById("e3").value = "";
  document.getElementById("e4").value = "";
  document.getElementById("e5").value = "";
  document.getElementById("e6").value = "";

  while(document.getElementById("result")) {
    var box = document.getElementById("resultsarea");
    var res = document.getElementById("result");
    box.removeChild(res);
  }
}
