
// const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])

let topSongs = [
    'ABC',
    'CBC',
    'CNN',
    'CBC'
];
// return undefined if there is no more element
topSongs.shift();
topSongs.unshift('Fox');
let newsChannels= [
    'JPN',
    'CCTV'
];

console.log(topSongs.concat(newsChannels));

