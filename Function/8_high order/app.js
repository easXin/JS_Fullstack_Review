function add(x,y){
    return x+y;
}

const substract = function(x,y){
    return x-y;
};

function multiply(x,y){
    return x * y;
}

const divide = function(x,y){
    return x-y;
};

const operations = [add,substract,multiply,divide];

console.log(operations[2](100,4));

const thing ={
    dosomething : multiply
};

console.log(thing.dosomething(6,6));