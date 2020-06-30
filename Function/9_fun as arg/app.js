/*
    High order function

    function accepts a  function

    function returns a function
*/

function repeatNTime(action,num){
    for(let i =0; i<num; i++){
        action();
    }
}

function rage(){
    console.log("I hate everything");
}

repeatNTime(rage,4);

function pickOne(f1,f2){
    let rand = Math.random(); 
    if (rand < 0.5){
        f1();
    }else{
        f2();
    }

}