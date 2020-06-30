/*
    Help js track the place, aka, which function is current being run
    new func is stack upon old function 
*/

const repeat = (str,times)=>{
    let result = '';
    for(let i=0; i<times; i++ ){
        result += str;
    }
    return result;
};

const scream = str =>
    str.toUpperCase()+'!!!';

const getRankText = phrase => {
    let text = scream(phrase);
    let rant = repeat(text,8);
    return rant;
};

const makeRant = (phrase,el) => {
    const h1 = document.createElement('h1');
    h1.innerText=getRankText(phrase);
    el.appendChild(h1);
};
console.log('hello');
makeRant('I hate maynonaise',document.body);
makeRant('...',document.body);