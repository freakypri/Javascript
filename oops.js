//creating objects
var x = new Object();
console.log(x);

//this method is more clean
var y = {};
console.log(y);

//structure and more details
console.dir(x);
console.dir(y);

//object with properties--> singleton obj created only one time did not create objects from it..so we can access directly
var Pizza = {
    crust : 'thin',
    toppings :3,
    hasBacon:true,
    howManyToppings: function(){
        return this.toppings
    }
};

console.log(Pizza.crust);

//adding a property
Pizza.price = '12$';

console.log(Pizza);

console.log(Pizza.howManyToppings());

//remove a property
delete(Pizza.crust);

console.log(Pizza);

