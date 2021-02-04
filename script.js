let rollButton = document.getElementById('roll');

function game() 
{
    const randomNo = Math.floor(Math.random()*6)+1;
    const diceImage = 'img/dice'+ randomNo + '.png';
    document.querySelectorAll('img')[0].setAttribute('src', diceImage);
    if (randomNo == 1) {
        document.querySelector('h1').innerHTML = 'You lost!';
    }else {
        document.querySelector('h1').innerHTML = 'Roll';  
        document.querySelector('#score').innerHTML = 'Score: ' + randomNo;
    }
};

rollButton.addEventListener("click", game);
 