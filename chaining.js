var obj = function () {
    this.i = 0;
    this.add = function (i) {
        this.i += i;
        return this;
    };
    this.subtract = function (i) {
        this.i -= i;
        return this;
    };
     this.print = function(){
        console.log(this.i);
    };
};

var obj1 = new obj();
obj1.add(3);
obj1.subtract(2);
//obj1.print();
console.log(obj1.add(3));

//after return this we can do chaining
obj1.add(3).subtract(2).print();