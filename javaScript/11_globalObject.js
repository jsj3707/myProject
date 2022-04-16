//전역객체(globalObject)는 특수한객체. 모든객체는 전역객체의 프로퍼티임.

// 함수 선언
function func() {
    alert('hello?');
}
// 일반적으로 이렇게 호출함.
func();
// 윈도우라는 객체의 method, 즉 윈도우라는 전역객체가 있다!
window.func();
// 스크립트내에서 함수호출할때 쓰는 방식이 사실 윈도우라는 전역객체가 생략되어있는거임.

var o = function method1() {
    return alert('method!');
}
//아래코드는 실행결과가 동일한 코드임.
o.method1();
window.o.method1();
