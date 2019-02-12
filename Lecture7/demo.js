function first() {
  var inches = promt("Enter inches");
  if(inches!=null) {
    var cm = inches*2.54;
  }
  document.write("Inches: " + inches + "<br/>");
  document.write("Cm: " + cm + "<br/>");
}
