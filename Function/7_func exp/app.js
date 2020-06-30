// function statement
function helpMe(){
    let msg = 'yolo';
    console.log(msg); // doesn't return error
}

// function expression : function no name, store in a variable
const square = function(num){
    return num*num;
};

square(8);

// assign anonymous function the variable 

const square1 = function shape(num) {
    return num * num;
};

square1(7);