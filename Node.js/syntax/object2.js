//js에서는 function이라는 statement가 값이 될 수 있다.
var f = function(){
    console.log(1+3);
    console.log(1+2);
}
var a = [f];
a[0](); //4, 3

var o = {
    func:f
}

o.func(); //4,3