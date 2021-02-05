let rollButton = document.getElementById('roll');
let score =0;
let startButton = document.getElementById('start');
startButton.style.visibility= 'hidden';

function game() 
{
    const randomNo = Math.floor(Math.random()*6)+1;
    const diceImage = 'img/dice'+ randomNo + '.png';
    document.querySelectorAll('img')[0].setAttribute('src', diceImage);
    score += randomNo;
    document.getElementById('score').textContent = 'Score:' + score;

    if (randomNo == 1) {
        document.querySelector('h1').innerHTML = 'You lost!';  
        startButton.style.visibility= 'visible';
    
    }else if(score < 20) {
        document.querySelector('h1').innerHTML = 'Roll';   
    }else{
        document.querySelector('h1').innerHTML = 'Winner!!!';
        startButton.style.visibility= 'visible';  
        score = 0;              
    }
};


rollButton.addEventListener("click", game,);
startButton


