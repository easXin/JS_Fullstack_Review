/*

    reference type : a pointer that points to the value type variable's memory location
        js uses that to update the array, but the reference to that array is not going to be changed

        two reference type can point some location
    value type variable  : actual value is stored in the memory

    As soon as reference won't changed, then we can changes the internal element
*/


const myEggs =['brown','blue'];
myEggs.push('pur');
myEggs[0] = 'golivy';

console.log(myEggs);

// give me an array, because i tring to override my array
// and change its reference
myEggs = ['lol'];

// because of this array should be used with const