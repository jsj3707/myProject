// 자바스크립트에는 특별한 변수 arguments가 있음.
// 함수에 따로 parameter를 선언하지 않아도 호출시 arguments를 넘기면
// arguments라는 유사객체(배열)에 값이 순서대로 저장됨.
function sum() {
    var i, _sum = 0;
    for (i = 0; i < arguments.length; i++) {
        document.write(i + '+arguments[i]' + '<br/>');
        _sum += arguments[i];
    }
    return _sum;
}
document.write('result : ' + sum(1, 2, 3, 4));
