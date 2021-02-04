let rollButton = document.getElementById('roll');
let score =0;

function game() 
{

    const randomNo = Math.floor(Math.random()*6)+1;
    const diceImage = 'img/dice'+ randomNo + '.png';
    document.querySelectorAll('img')[0].setAttribute('src', diceImage);
    score += randomNo;
    document.getElementById('score').textContent = 'Score:' + score;

    if (randomNo == 1) {
        document.querySelector('h1').innerHTML = 'You lost!';     
    }else if(score <= 20) {
        document.querySelector('h1').innerHTML = 'Roll';  
    }else{
        document.querySelector('h1').innerHTML = 'Winner!!!';         
    }
};

rollButton.addEventListener("click", game);