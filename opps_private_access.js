var Pizza = function () {
    var crust = 'thin';//private variable
    var toppings = 3;
   
    //private function --> cant access directly
    var getToppings = function () {
        return toppings;
    };

    //non functional obj --> closure example
    var tmp = {};
    tmp.getToppings = getToppings;
    //it returns the functions and the variables associated with it
    return tmp;
};

var PizzaA = new Pizza();
console.log(PizzaA);