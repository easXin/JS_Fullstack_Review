function multiplyBy(num){
    return function(){
        console.log("Hi!!");
    };
}
// both of them are same
function multiplyBy1(num) {
    const t = function (x) {
        return x * num;            // returns a func first
    };
    return t;
}

const triple = multiplyBy1(3);
console.log(triple(2));

// lexcial scope , inner class

function makeBetweenFunc(x,y){
    return function(num){
        return num>=x && num<=y;
    };
}

let isBetween9and20 = makeBetweenFunc(9,20);
console.log(isBetween9and20(11));