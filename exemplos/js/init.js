
(function() {
/*    var myObject = {
        myProperty: 1,
        init: function init() {
            return this.myProperty;        
        }
    };*/
    function myFunction() {
        return this;
    }
//    console.log(myObject.init());    
    console.log(myFunction());

    var myObject = {
        myProperty: 1,
        init: function init() {
            return this;
        }
    };
    console.log('myObject', myObject.init() === myObject);

    //var newObject = new Object();
    function MyConstructor(){
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
        
    }
    var construtor = new MyConstructor();
    //console.log('newObject', construtor);
    console.log('MyConstructor', MyConstructor());
    console.log(prop1);
})();



