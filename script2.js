const firstRandomNum = Math.floor(Math.random()*6)+1;
const diceImage1 = 'img/dice'+ firstRandomNum + '.png';
document.querySelectorAll('img')[0].setAttribute('src', diceImage1);

const secondRandomNum = Math.floor(Math.random()*6)+1;
const diceImage2 = 'img/dice'+ secondRandomNum + '.png';
document.querySelectorAll('img')[1].setAttribute('src', diceImage2);
   