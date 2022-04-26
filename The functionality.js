let x;
x = 0;
function nextImg() {
  x++;
  switch (x) {
    case 0:
      document.getElementById("00").style.display = "block";
      document.getElementById("01").style.display = "none";
      document.getElementById("02").style.display = "none";
      document.getElementById("03").style.display = "none";
      document.getElementById("prevArrow").style.display = "none";
      document.getElementById("nextArrow").style.display = "block";
      break;
    case 1:
      document.getElementById("01").style.display = "block";
      document.getElementById("00").style.display = "none";
      document.getElementById("02").style.display = "none";
      document.getElementById("03").style.display = "none";
      document.getElementById("prevArrow").style.display = "block";
      document.getElementById("nextArrow").style.display = "block";

      break;
    case 2:
      document.getElementById("02").style.display = "block";
      document.getElementById("00").style.display = "none";
      document.getElementById("01").style.display = "none";
      document.getElementById("03").style.display = "none";
      document.getElementById("prevArrow").style.display = "block";
      document.getElementById("nextArrow").style.display = "block";
      break;
    case 3:
      document.getElementById("03").style.display = "block";
      document.getElementById("00").style.display = "none";
      document.getElementById("01").style.display = "none";
      document.getElementById("02").style.display = "none";
      document.getElementById("prevArrow").style.display = "block";
      document.getElementById("nextArrow").style.display = "none";
      break;
  }
}
function prevImg() {
  x--;
  switch (x) {
    case 0:
      document.getElementById("00").style.display = "block";
      document.getElementById("01").style.display = "none";
      document.getElementById("02").style.display = "none";
      document.getElementById("03").style.display = "none";
      document.getElementById("where").style.margin = 50;
      document.getElementById("prevArrow").style.display = "none";
      document.getElementById("nextArrow").style.display = "block";
      break;
    case 1:
      document.getElementById("01").style.display = "block";
      document.getElementById("00").style.display = "none";
      document.getElementById("02").style.display = "none";
      document.getElementById("03").style.display = "none";
      document.getElementById("prevArrow").style.display = "block";
      document.getElementById("nextArrow").style.display = "block";
      break;
    case 2:
      document.getElementById("02").style.display = "block";
      document.getElementById("00").style.display = "none";
      document.getElementById("01").style.display = "none";
      document.getElementById("03").style.display = "none";
      document.getElementById("prevArrow").style.display = "block";
      document.getElementById("nextArrow").style.display = "block";
    case 3:
      document.getElementById("03").style.display = "block";
      document.getElementById("00").style.display = "none";
      document.getElementById("01").style.display = "none";
      document.getElementById("02").style.display = "none";
      document.getElementById("prevArrow").style.display = "block";
      document.getElementById("nextArrow").style.display = "none";
      break;
  }
}
