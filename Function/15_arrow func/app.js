const square = function(x){
    return x*x;
};

const square1 = (x)=>{
    return x*x;
};

const isEven = (num) =>{
    return num%2==0;
};

const multiply=(x,y) => {
    return x*y;
};

// rule 1: one param, leave parathesis off option

// rule 2: no param, must use ()
const greet = () =>{
    console.log("greeting");
};
// rule 3: body contains one line, skip return keyword and curly bracket
const nums = [1,2,3,4];
const ex1 = nums.map(n=>{
    return n*n;
});
const ex2 = nums.map(n=> n*2);

