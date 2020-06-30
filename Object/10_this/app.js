// this is a global object : window, but not everytime
console.log(this);



// refer to object itself

const person = {
    f:"f",
    l:"l",
    fullName(){
        console.log(this.f);
    },
    m: this.l
};
// returns a reference to object itself
console.log(person.m);