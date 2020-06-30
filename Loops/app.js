// for loop
for(let i=1; i<=10; i+=3){
    console.log(i);
}
// while loop
let num =0;
while(num<10){
    num++;
}
let arr = {1:2};
// for .. of iterable loop   -> object -> keys()
for(let v of arr){
    console.log(v);
}


for(let w of Object.keys(arr)){
    console.log(arr[w]);
}
const rating = Object.values(arr); // -> no array
// for .. in loop -> for object  returns key name
for(let prop in arr){
    console.log(prop);
}


// break  can be placed in any loop