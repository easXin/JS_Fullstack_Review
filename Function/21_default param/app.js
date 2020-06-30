// 1.0
function multiply(a,b){
    b = typeof b !=='undefined'?b:1;
    return a*b;
}
console.log(multiply(7));
console.log(multiply(7,2));

// 2.0
function multiply(a, b=1) {
    return a * b;
}