//function는 값과 같고 object는 값을 저장하는 그릇과 같다
var o = {
    v1: 'v1',
    v2: 'v2',
    f1: function () {
        console.log(this.v1);
    },
    f2: function () {
        console.log(this.v2);
    }
}

o.f1();
o.f2();