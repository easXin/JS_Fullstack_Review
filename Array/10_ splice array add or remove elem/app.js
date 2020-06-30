
let topSongs = [
    'ABC',
    'CBC',
    'CNN',
    'CBC'
];
// insert something on preference position

// let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// start, #(deleting iteam), inserting items

// remove and add
topSongs.splice(1,2,'CCTV','MBN');
console.log(topSongs);


// just add

topSongs.splice(3,0,'KBM');
console.log(topSongs);