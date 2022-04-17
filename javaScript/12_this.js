/*this는 함수 내에서 함수 호출 맥락(context)를 의미한다.
맥락이라는 것은 상황에 따라서 달라진다는 의미인데 즉 함수를 어떻게 호출하느냐에 따라서 this가 가리키는
 대상이 달라진다는 뜻이다. 함수와 객체의 관계가 느슨한 자바스크립트에서 this는 이 둘을 연결시켜주는
 실질적인 연결점의 역할을 한다.*/

function func() {
    if (window === this) {
        console.log('window === this');
    }
}

func();

// 예시
function cal() {
    this.add = function() {
        var _add = 0;
        for (var i = 0; i < arguments.length; i++) {
            _add += arguments[i];
        }
        return _add;
    }

    this.sub = function() {
        var _sub = 0;
        for (var i = 0; i < arguments.length; i++) {
            _sub -= arguments[i];
        }
        return _sub;
    }

    this.mul = function(){
        var _mul = 1;
        for (var i = 0; i < arguments.length; i++) {
            _mul = _mul * arguments[i];
        }
        _mul = Math.trunc(_mul,2);
        return _mul;
    }
    
    this.div = function(){
        var  _div = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if(arguments[i] === 0) {
                return '0으로 나눌수 없습니다!'
            }
            _div = _div / arguments[i];
        }
        _mul = Math.trunc(_div,2);
        return _div;
    }
}
