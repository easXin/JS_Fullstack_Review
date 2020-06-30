
let topSongs = [
    'ABC',
    'CBC',
    'CNN',
    'CBC'
];

console.log(topSongs.slice(0,3));
// slice() with no arg gives a copy or original array
let recordList = topSongs.slice();
console.log(recordList);