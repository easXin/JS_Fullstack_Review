/*
    Scope : the location where a variable is defined dicatates 
    where we have access to that variable 
*/


function helpMe(){
    let msg = 'yolo';
    console.log(msg); // doesn't return error
}

// let has block scope
// var has gobal scope

console.log(msg); // returns an error message , outside of scope




// Lexcial scope : inner function bound scope to its parent


function outer(){
    let hero = "black panther";

    // act like variable 
    function inner(){
        console.log(hero.toUpperCase());
    }

    inner();
}