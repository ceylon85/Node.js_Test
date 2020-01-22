//array
var myfam = ['sj', 'bm', 'ge'];
console.log(myfam[1]); //bm
var i = 0;
while (i < myfam.length) {
    console.log('array loop => ', myfam[i]);
    i = i + 1;
}
//object
var roles = {
    'first': 'sj',
    'second': 'bm',
    'third': 'ge'
}
console.log(roles.first); //sj
console.log(roles['first']); //sj
//변수 name 에는 키값이 들어옴
//value를 얻기 위해 객체의 키값을 입력하면 value값을 얻는다
for(var name in roles){
    console.log('object => ', name, ', value => ', roles[name]);
}
