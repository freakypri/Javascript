var Pizza = function () {
    var crust = 'thin';//private variable
    this.hasBacon = true; //public variable
    var toppings = 3;
    this.getHasBacon = function () {
        return this.hasBacon;
    };

    //accessing private property using public method
    this.getCrust = function () {
        return crust;
    };

    //private function --> cant access directly
    var getToppings = function () {
        return toppings;
    };

    //non functional obj
    var tmp = {};
    tmp.getToppings = getToppings();
    return tmp;
};

var PizzaA = new Pizza();
//console.log(PizzaA.getHasBacon());
console.log(PizzaA.getCrust());

console.log(PizzaA.getToppings());//err as we cant access a private method
console.log(PizzaA.getToppings);