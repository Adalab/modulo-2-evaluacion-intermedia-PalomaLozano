    'use strict';

    const numberX = document.querySelector ('.js_number');

    const button = document.querySelector('.js_button');

    const clue = document.querySelector('.js_clue');

    const attempsEl = document.querySelector('.js_chances');

    let attemps = 0;

    const numberResult = getRandomNumber(100);

    const form = document.querySelector('.js-form');
    
    
    function getRandomNumber(max) {
        return Math.ceil(Math.random() * max);
       }

       console.log(numberResult);
    
    function writeClue(message){
      clue.innerHTML = message;
    }

    function game (){
  
    const numberUser = parseInt(numberX.value);

    if (numberUser <= 0 || numberUser > 100) {
        writeClue('El número debe estar entre 1 y 100');
    }

    else if (numberUser > numberResult ){

        writeClue('Demasiado alto');
       }

     else if (numberUser < numberResult ){
        writeClue('Demasiado bajo');
     }

     else{
        writeClue('Has ganado campeona!!!');
     }

    }
    
    function counter () {
        attemps = attemps +1;
        attempsEl.value = `Número de intentos: ${attemps}`;
      }

    function handleButton(ev){
        game();
        counter();
      }
      
    function handleSubmit(ev){
    ev.preventDefault();
    }
   
    button.addEventListener('click' , handleButton);

    form.addEventListener('submit', handleSubmit);
  