(function(){
    //delete só deleta propriedades de um objeto, mas não o objeto.
    //propriedades e argumentos devem ter nomes diferentes.
    var obj = {
        prop1: 'prop1',
        prop2: 'prop2',
        prop3: 'prop3'
    };
    console.log(delete obj.prop1, obj);
})();