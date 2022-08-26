console.log("Cipher JS File linked!");
function stringRevEncDec() {
  let myStr = document.getElementById("stringRev").value;
  let revStr = [];
  for (let index = 0; index < myStr.length; index++) {
    const element = myStr[index];
    revStr.push(element);
  }
  let reversedString = "";
  for (let index = revStr.length - 1; index >= 0; index--) {
    reversedString += revStr[index];
  }
  document.getElementById("outputStr").innerHTML = reversedString;
}
