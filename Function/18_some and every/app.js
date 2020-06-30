// some | every: return true, false

const words = ["www","aaaa","xxx"];

console.log(words.every(w => w.length>=3));

console.log(words.some(w =>w.length>=2));
