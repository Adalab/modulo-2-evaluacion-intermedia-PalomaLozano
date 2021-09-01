    'use strict';

    const button = document.querySelector('.js_button');

    const numberX = document.querySelector ('.js_numberX');

    const pista = document.querySelector('.js_clue');

    const intentos = document.querySelector('.js_chances');

   


    

    function getRandomNumber(max) {
        return Math.ceil(Math.random() * max);
       }
       
    
    
    

    function game (){
    
        const numero = getRandomNumber(100);
        
        const numeroUser = numberX.value;

        const pistaUser = pista.value;

    if (numeroUser === numero ){

        pistaUser.innerHTML = 'Has ganado campeona!!!';

     }

     else if (numeroUser < numero ){
        pistaUser.innerHTML = 'Demasiado bajo';
     }

     else if (numeroUser > numero ){
        pistaUser.innerHTML = 'Demasiado alto';
     }

      else if (numeroUser > 100){
        pistaUser.innerHTML = 'El número debe estar entre 1 y 100';
    }
    
}
    

    
    function contador () {
        const contadorPrueba = intentos.value;
        if (contadorPrueba === +1) {
        intentos.innerHTML = 'contadorPrueba';
         }
      }



      
      function handleButton(){
        
        game();
        contador();

      }


      button.addEventListener( 'click' , handleButton);