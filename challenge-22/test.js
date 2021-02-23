(function(){
    'use strict';

    function myFunction(a, b, c, d) {
        console.log(this.lastName, a, b, c, d);
    }

    //var arr = [1, 2, 3, 4];
    //var obj = {prop1: 1, prop: 2};

    var obj = {
        lastName: 'ferreira'
    };
    
    var obj2 = {
        lastName: 'barros'
    };

    //console.log(obj.toString());  
    //console.log(myFunction.toString()); //sem invocar, quando invoca ela executa automaticamente.
    //var myName = new myFunction();
    //myName.lastName = 'ferreira';
    var arr = [1, 2, 3, 4];

    myFunction.apply(obj2, arr)
    myFunction.call(obj2, 'a', 'b', 'c', 'd');
    //myFunction.call(obj);

    function MyFunction(name, lastName) {
        //this.fullName = name + ' ' + lastName;
        this.name = name;
        this.lastName = lastName;
        this.age = 20;    //lido primeiro
    }
    MyFunction.prototype.fullName = function(){ //prototype, usado para extender a função.
        return this.name + ' ' + this.lastName;
    }
    
    MyFunction.prototype.age = 30;

    var lucas = new MyFunction('Lucas', 'Ferreira');
    
    MyFunction.prototype.age = 40;  //prototype sobreescreve se nao for declarado dentro da função principal
    //console.log(lucas.fullName());
    console.log(lucas.age);


    function myFunction() {
        //console.log(arguments); //arguments: Array-like
        /*var ar = [1, 2, 3, 4];
         ar.forEach(function(item, index){  //forEach itera cada item da variavel.
            console.log(this[index]);
        }, arguments); */
        /*for(var i = 0; i < arguments.length; i ++) {
            console.log(arguments[i]);
        }*/
        /*Array.prototype.forEach.call(arguments, function(item, index){
            console.log(item)
        });*/ //call: passa o primeiro parametro como 'this'.
        var result = Array.prototype.reduce.call(arguments, function(acumulated, actual, index){
            return acumulated + actual;
        });
        console.log(result);
        //.editorconfig  http://editorconfig.org/
    }
    myFunction(1,2,3,4);
})();