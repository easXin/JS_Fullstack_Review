/*
    Spread

    allows an iterable to be expanded in places where
    zero or more ags are expected 

    or an object
    expression to be expanded in places where zero or
    more key-value pairs are expected
*/



// expands an interable(array,strubg) into a list of arg

// spread into individual argument

const nums = [21,31,33];
Math.max(nums); 
// won't work , because we are comparing numbers
// insted of a list of number
Math.max(...nums);

const arr1 = [];
const arr2 = [];
// combines two arrays 
const arr3 = [...arr1,...arr2];


// copies all the properties of one obj into another object literal 

const f = {"s":1, "q":2};
//const x = {"z":1, ...f};

console.log(x);