'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess');
document.querySelector('.guess').value = 23;
*/


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const again = document.querySelector('.again').addEventListener('click', function (){

    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});

document.querySelector('.check').addEventListener('click', 
 function () {
    const guess = Number(document.querySelector('.guess').value);

        //When no input number
    if(!guess) {
        document.querySelector('.message').textContent = '😈No number!'

        //When player wins
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = '😍Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.highscore').textContent = score;
        // document.querySelector('.number').style.fontSize = '12rem';

        //When number is too high
    }else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '☹ Number too high!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '😭 Game over!'
            document.querySelector('.score').textContent = 0;
        }

        //When number is too low
    }else if(guess < secretNumber){
        document.querySelector('.message').textContent = '😫 Number too low!';
        score--;
        document.querySelector('.score').textContent = score;
        if(score < 1){
            document.querySelector('.message').textContent = '😭 Game over!';
            document.querySelector('.score').textContent = 0;
        }
    }

})


