var Pizza = function () {
    this.crust = 'thin';//created a public property
    this.toppings = 3;
    this.hasBacon = true;
}

console.log(Pizza);
console.dir(Pizza);//didnt see the properties
console.dir(Pizza.crust);//will give err(undefined) , cant access like this

var PizzaA = new Pizza(); //constructor ....creating a new obj , executing Pizza


PizzaA.crust = 'pan';
var PizzaB = new Pizza();

console.log(PizzaA.crust);//right way
console.log(PizzaB.crust);
console.log(PizzaB instanceof Pizza);
console.log(PizzaB.constructor);

