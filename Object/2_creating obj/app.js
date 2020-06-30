/*
    {
        object literal
    }

    object is like array, so we can use const on it

    key is automatically convert into string in js
*/

const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep:'2:13',
    45:'ok'
};


// access data   trailing comma is optional 
console.log(fitBitData['45']);