(function(win, doc){
    'use strict';
    
    ///window.alert('Mensagem');
    var name = prompt('Qual o seu nome?')
    if(name)
        console.log('O nome é', name);
    else  
        console.log('não respondeu :(');  
    
    /* var del = confirm('Deseja realmente excluir? ');
    if(del)
        console.log('Excluído com sucesso', del);
    else
        console.log('Acão cancelada!', del); */       
    //console.log(doc.getElementById('my-link'));
    //console.log(doc.getElementsByClassName('my-link'));
    //console.log(doc.getElementsByTagName('a'));
    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('#button');

    $button.addEventListener('click', function(event){
        event.preventDefault();
        console.log('Click no Botão');
    }, false);

    //document.addEventListener
    $inputUsername.addEventListener('click', function(){
        alert('Clicou no input');
    }, false);
    //console.log($inputUsername.value, $inputPassword.value)
    //$inputUsername.value = 'Luck';
    //$inputPassword.value = 'senha';
    //console.log($inputUsername.value, $inputPassword.value)
})(window, document);

    //nao causam efeitos colaterais e são estáticos.
    //$inputs = document.querySelectorAll('[type="text"]');
    //$inputs = document.querySelector('input');
    //$inputs = document.querySelectorAll('input');