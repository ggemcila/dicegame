//Generate a random number from 1 to 6
const firstRandomNum = Math.floor(Math.random()*6)+1;
const secondRandomNum = Math.floor(Math.random()*6)+1;
// image/dice
const firstDiceImage = 'img/dice' + firstRandomNum + '.png';
document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);
const secondDiceImage = 'img/dice' + secondRandomNum + '.png';
document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);
