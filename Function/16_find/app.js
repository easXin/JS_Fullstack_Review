/*
    return the value of the first element in the array that satisfies the testing function
*/

let movies = [
    "ABC",
    "CBC",
    "CCA",
    "DFCC"
];

const target = movies.find(movies=>{
    return movies.includes("CC");
});

console.log(target);