function funcName(){
    /**************/
}

function rollDie(){
    let roll = Math.floor(Math.random()*6)+1;
    console.log(`Rolled : ${roll}`);
}

function throwDice(){
    for(let i=1; i<=6; i++){
        rollDie();
    }
}

