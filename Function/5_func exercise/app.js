

function isValidPassword(password ,username){
    return (password.length>=8 && !password.includes(' ') && password.indexOf(username)==-1)? true:false;
}



function findAvg(arr) {
    let total = arr.length;
    let sum = 0;
    for (let w of arr){
        sum+=w;
    }
    return sum/total;
}

function isPangram(str){
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(str.indexOf(char)==-1){
            return false;
        }
    }
    return true;
}
