var number = [1, 400, 23, 12, 5, 7, 42, 1200];
var i = 0;
var total = 0;
while(i< number.length){
    total = total + number[i];
    i = i + 1;
}
console.log(`Total : ${total}`);