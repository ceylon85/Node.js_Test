//file handler , fs nodule을 불러옴
var fs = require('fs');

// readFileSync 동기적
console.log('A');
var result = fs.readFileSync('/Users/heavenvoice/Desktop/code/nodejs/syntax/b.txt', 'utf-8');
console.log(result);
console.log('D');

// readFile 비동기적
console.log('A');
fs.readFile('/Users/heavenvoice/Desktop/code/nodejs/syntax/b.txt', 'utf-8', function(err, result){
    console.log(result);
});
console.log('E');