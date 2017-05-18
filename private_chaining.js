var obj = function () {
    var i = 0;
    var add = function (j) {
        i += j;
        return this;
    };
    var subtract = function (j) {
        i -= j;
        return this;
    };
    var print = function () {
        console.log(i);
    };

    return { add: add, subtract: subtract, print: print };
};

var x = obj();
console.log(x);
