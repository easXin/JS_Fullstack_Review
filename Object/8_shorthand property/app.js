const reviews = [4.5,2.0,3.22,2.9];
const max =Math.max(...reviews);
const min = Math.min(...reviews);
const sum = reviews.reduce((accu,ele)=>accu+ele);
const avg = sum /reviews.length;

// returns an object contains all the properties
const stats = {min,max,sum,avg};
console.log(stats);

// new way to adding property
const team = {
    [reviews]:max,
    [min]:sum

    //[this part is going to be evaluate and use as key in the bject]
};

console.log(team);

const addProp = (obj,k,v)=>{
   // const copy = {...obj};
    copy[k] = v;
    return copy;
};
const addProp1 = (obj,j,k) =>{
    return {
      //  ...obj,
        [k]:v
    };
};