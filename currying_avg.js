"use strict"
var avg = function (...n) {
    let tot = 0;
    for (let i = 0; i < n.length; i += 1) {
        tot += n[i];
    }
    return tot / n.length;
};

var spiceUp = function (fn, ...n) {
    return function (...m) {
        return fn.apply(this, n.concat(m));
    };
};

//this return a function-> fold the avg as closure f any new wno comes spiceUp is used with old avg
var doAvg = spiceUp(avg,1,2,3);
console.log(doAvg(4,5,6));