// upack values from array or object
// destructing array properties
const app = ['abc','cbc','ddc','aaa'];

const[a,b,c] = app;
// unpack element in short way
console.log(b);


// destructing object properties
const app1 = { t:'abc', y:'cbc', u:'ddc', p:'aaa'};
// name must be same 
//const{t,y,...u} = app1;
console.log( u); // use spread syntax to grad all the value 


// extracting property from object with custom name
const{p:l}=app1;
console.log(l);

// syntax to extracting the element from object of array

const arr1=[
    {x:2},
    {v:1},
    {g:8}
];

const [,{v:g1}] = arr1;

console.log(g1);




// parameter destructing

function print(arr1){
    const{x,v,g} = arr1;
    console.log(x,v,g);
}