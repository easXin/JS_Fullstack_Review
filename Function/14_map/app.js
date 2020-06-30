/*
    Map creates a new array with results of calling a callback
    on every element in the array

    transform an old element to a new array

    needs TO return value in map 
*/

const texts = ['rid','aap','kim'];
const caps = texts.map(function(n){
    return n.toUpperCase(); // change array
});

console.log(caps);
const numbers = [20,30,11,23];
const numDetail = numbers.map(function(n){
    // return object of array
    return{
        value:n,
        isEven: n%2 ===0
    };
});

console.log(numDetail);