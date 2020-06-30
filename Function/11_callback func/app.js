/*
    a callback function is a function passed into
    another function as an argument, which is
    then invoked inside the outer function
*/

function grumpus(){
    console.log("Go away");
}
/*
run after 500sec
setTimeout(grumpus,500);

setTimeout(function(){
    console.log("Go away!!!");
},699);
*/

const btn = document.querySelector("button");
btn.addEventListener('click', function(){
    alert("Why did you click me!!!");
    function grumpus() {
        console.log("Go away");
    }
    setTimeout(grumpus,500);
});