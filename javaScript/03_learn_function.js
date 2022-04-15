// javaScript에서는 함수는 객체임. 함수도 일종의 값이다!
// 변수 a객체에 저장.
// var a = {
//   fkey:function cal(func, num){
//     return func(num);
//   }
// };
//증가함수
function increase(num) {
    return num + 1;
}
//감소함수
function decrease(num) {
    return num - 1;
}
alert(a.cal(increase, 1));

// 객체로써 함수사용 예시
function cal(mode) {
    var funcs = {
        'plus': function(left, right) {
            return left + right
        }
        'minus': function(left, right) {
            return left - right
        }
    }
    return funcs[mode];
}

alert(cal('plus')(2, 1));
alert(cal('minus')(2, 1));

// 배열로써 함수사용 예시
// 배열의 값을 함수로 초기화해줌.
var process = [
    function(input) {
        return input + 10;
    },
    function(input) {
        return input * input;
    },
    function(input) {
        return input / 2;
    }
]
// 매개변수에 사용될 변수 선언 인자는 1로 지정.
var input = 1;
// 배열길이만큼 함수를 사용함.
for (var i = 0; i < process.length; i++) {
    input = process[i](input);
}
