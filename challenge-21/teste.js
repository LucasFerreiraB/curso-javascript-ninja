(function(win, doc){
    'use strict';

    console.log('inicio');
    //setTimeout
    /*setInterval(function() {
        console.log('executou setInterval');
    }, 1000);*/
    var counter = 0;
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;
    function timer() {
        console.log('timer', counter++);
        //if(counter > 20) //break da função recursiva
            //return;  
         //função recursiva 
    }
    temporizador = setInterval(timer, 1000);
    
    $button.addEventListener('click', function() {
        clearInterval(temporizador);
    }, false);

    /*function timer() {
        console.log('timer', counter);
    }*/
    // setInterval(timer, 1000);
    console.log('fim');
})(window, document);