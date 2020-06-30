/*
    Reduce: executes a reducer function on each element of the array
    and resulting in a single value

    store accumulative value 
*/


let num = [3,2,1,2].reduce((accumulator, cur)=>
    accumulator+cur
);

console.log(num);