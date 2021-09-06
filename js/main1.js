    'use strict';
//para prevenir defectos
    const form = document.querySelector('.js-form');
    
    function handleSubmit (ev){
        ev.preventDefault();
    }

    form.addEventListener(  'submit', handleSubmit);


    const numberInput = document.querySelector('.js_number');

   console.log(numberInput.value);

   const testButton = document.querySelector(   '.js-button');

    //generar numero aleatorio

    function getRandomNumber(max) {
        return Math.ceil(Math.random() * max);
       }

       //hay que llamar a la función para que se ejecute la función
     const randomNumber = getRandomNumber(100);

     console.log(randomNumber);

     
//boton

function handleClick(ev) {
    const playerNumber = numberInput.value;

    if(playerNumber < randomNumber) {
        
    }
}
testButton.addEventListener(    'click' , handleClick);


