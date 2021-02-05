let rollButton = document.getElementById('roll');
let score =0;

function game() {
    const firstRandomNum = Math.floor(Math.random()*6)+1;
    const diceImage1 = 'img/dice'+ firstRandomNum + '.png';
    document.querySelectorAll('img')[0].setAttribute('src', diceImage1);
    score += firstRandomNum;
    document.getElementById('score1').textContent = 'Score:' + score;

    const secondRandomNum = Math.floor(Math.random()*6)+1;
    const diceImage2 = 'img/dice'+ secondRandomNum + '.png';
    document.querySelectorAll('img')[1].setAttribute('src', diceImage2);
    score += secondRandomNum;
    document.getElementById('score2').textContent = 'Score:' + score;
};


rollButton.addEventListener("click", game);
 
