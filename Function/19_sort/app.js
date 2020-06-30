const prices = [1,32,4,12,0,2];

const newPrices = prices.sort((a,b)=>
    b-a
);

console.log(newPrices);

// ascending a-b
// decending b-a
/*
    passing in comparafuc as its param
        return < 0     a b
        return  = 0    no change
        return > 0     b a

*/