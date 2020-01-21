// //'A'를 출력하는 a라는 이름의 함수 
// function a(){
//     console.log('A');
// }

//변수명이 a인 익명함수의 값으로 'A'가 출력
var a = function(){
    console.log('A');
}

function slowfunc(callback){
    callback();
}
slowfunc(a);