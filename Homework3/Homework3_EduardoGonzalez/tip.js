function onLoad() {
  let tip = document.getElementById('calculate');
  tip.action() = compute();
}

function calculate() {

  total = document.querySelector(".Subtotal").value;
  tip = document.getElementById("slider").value/100;

  if(tip<=0.15) {
    var element = document.getElementById("result");
    element.classList.add("fail");
  } else {
    var element = document.getElementById("result");
    element.classList.remove("fail");
  }

  document.getElementById("tip").innerHTML = Math.round(tip*100);
  document.getElementById("tipTotal").innerHTML = Math.round(tip*total);
  document.getElementById("total").innerHTML = Math.round(total*(tip+1));
}
