function checkArg(){
    const newArr = [...arguments];
    newArr.forEach(n=>
        console.log(n));
    return newArr;
}


function checkArg1(...nums) {
    nums.forEach(n =>
        console.log(n));
}

console.log(checkArg1([1, 2, 3, 4, 5]));