//function
function increment(i){
    return i + 1;
}

//self invoking,no name --> anonymous function
(function(i){
    return i+1;
})(j);

//different way of writing iife i.e ()
(function(i){
    return i+1;
}(j));

//if not returning any value iife
!function(){
    //code here
}();
~function(){
    //code here
}();
-function(){
    //code here
}();
+function(){
    //code here
}();
