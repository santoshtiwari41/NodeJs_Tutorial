// path module

const path=require('path');

console.log(path.basename('/home/santosh/nodejs/chapter_03_pathModule/index.js'));

console.log(path.basename(__filename));
console.log(path.basename(__filename,'.js'));

// for directory name
console.log(path.dirname(__filename));

// for extension name

console.log(path.extname(__filename));

// to give own path

console.log(path.join('/react','project','src','index'));

// normalize

console.log(path.normalize('home///src///pdd'));

// parse

console.log(path.parse(__filename));