const rollButton = document.getElementById('roll');
rollButton.addEventListener("click", () => {
    const randomNo = Math.floor(Math.random()*6)+1;
    const diceImage = 'img/dice'+ randomNo + '.png';
    document.querySelectorAll('img')[0].setAttribute('src', diceImage);
});

