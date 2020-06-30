const math = {
    mul: (x, y) => x * y,
    div: (x, y) => x / y,
    squ: (x) => Math.pow(x,2),
    // 1.0, 2.0 is much cleaner
    add1: (x,y) =>x + y,
    // 2.0 shorthand
    add(x,y){
        return x+y;
    }
};
console.log(math.add(3,3));