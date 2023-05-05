var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceName1 = "images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src",diceName1);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceName2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src",diceName2);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🎌player1 wins  ";
}
else if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML="draw";
}
else{
  document.querySelector("h1").innerHTML="  player2 wins🎌";
}
