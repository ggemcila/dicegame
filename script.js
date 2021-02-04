//Generate random number from 1 to 6
const randomNo = Math.floor(Math.random()*6)+1;
//Imagedice 1 to 6
const diceImage = 'img/dice'+ randomNo + '.png';
document.querySelectorAll('img')[0].setAttribute('src', diceImage);

const button = document.getElementById("roll");
     
