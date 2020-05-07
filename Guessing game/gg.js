function onLoad() {
  let result = document.getElementById('guess');
  result.action() = guess();
}

random = Math.floor(Math.random() * 101);
console.log("Random:", random);
var cont = 1;

function guess() {

  g1 = (document.querySelector(".number").value);

  var box = document.createElement("P");
  var res = document.createTextNode(g1);
  box.appendChild(res);
  document.getElementById("resultsarea").appendChild(box);

  box.setAttribute("Id", "result")

  if(g1 > random) {
    cont++;
    box.setAttribute("class", "higher");
  }
  if(g1 < random) {
    cont++;
    box.setAttribute("class", "lower");
  }
  if(g1 == random) {
    box.setAttribute("class", "correct");
    document.getElementById("guess").disabled = true;

    document.getElementById("result").innerHTML = ("You got it in " + cont + " tries.");

  }
}
