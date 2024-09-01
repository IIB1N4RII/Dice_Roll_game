'use strict';


const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btn_rollEL = document.querySelector('.btn--roll');
const btn_newEL = document.querySelector('.btn--new');
const btn_holdEL = document.querySelector('.btn--hold');




const P0 = document.querySelector('.player--0');
const P1 = document.querySelector('.player--1');



let TotalScores ;

let CurrentScore ; 
let ActivePlayer ; 
let Playing ;



const SwitchPlayer = function(){
     document.getElementById(`current--${ActivePlayer}`).textContent = 0;
     ActivePlayer = ActivePlayer === 0 ? 1 : 0;
     CurrentScore = 0;
     P0.classList.toggle('player--active');
     P1.classList.toggle('player--active');
}

const init = function(){
    Playing = true;
    ActivePlayer = 0;
    TotalScores = [0,0]
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    diceEL.classList.add('hidden');
    CurrentScore = 0;
    document.getElementById(`current--${ActivePlayer}`).textContent = 0;
    TotalScores[ActivePlayer] = 0;
    document
      .querySelector(`.player--0`)
      .classList.remove('player--winner');
    document
      .querySelector(`.player--1`)
      .classList.remove('player--winner');

    document
      .querySelector(`.player--${ActivePlayer}`)
      .classList.add('player--active');
}



init();



btn_rollEL.addEventListener('click' , function(){
    if (Playing) {
        const dice = Math.trunc(Math.random() * 6 )+ 1;
        
        diceEL.classList.remove('hidden');
        
        diceEL.src = `dice-${dice}.png`;
        
        
        if (dice !== 1) {
            CurrentScore += dice ; 
            document.getElementById(`current--${ActivePlayer}`).textContent = CurrentScore;
            
        } else{
            SwitchPlayer()
        }
    }
        
    });
    
btn_holdEL.addEventListener('click' , function(){
    if (Playing) {
        
        TotalScores[ActivePlayer] += CurrentScore;
        
        document.getElementById(`score--${ActivePlayer}`).textContent = TotalScores[ActivePlayer];
        
        
        
    }
 if (TotalScores[ActivePlayer] >= 100) {
    Playing = false;
   document.querySelector(`.player--${ActivePlayer}`).classList.add('player--winner');

   document.querySelector(`.player--${ActivePlayer}`).classList.remove('player--active');
   diceEL.classList.add('hidden');
 } else {
     SwitchPlayer();
 }

})

btn_newEL.addEventListener('click' , init);