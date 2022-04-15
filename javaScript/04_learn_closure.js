// 클로저(closure)는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다.
//클로저는 자바스크립트를 이용한 고난이도의 테크닉을 구사하는데 필수적인 개념으로 활용된다.

//예시 1 외부함수선언
function outer() {
    var title = 'coding everybody';
    //  내부함수
    function inner() {
        // 내부함수에서 외부함수의 지역변수에 접근할 수 있음.
        alert(title);
    }
    // 내부함수의 코드 실행됨
    inner();
}
//외부함수 안에 내부함수가 실행됨.
outer();

//예시 2 함수를 리턴하는 외부함수 선언
<<<<<<< HEAD
function outter() {
    var title = 'coding everybody';
    // return 하는 순간 외부함수는 죽지만 내부함수를 리턴함.
    return function() {
        alert(title);
    }
=======
function outter(){
        var title = 'coding everybody';
        // return 하는 순간 외부함수는 죽지만 내부함수를 리턴함.
        return function(){
            alert(title);
        }
>>>>>>> 96fd2d99ec40684dbaed100ac8fcf6f6341dbdc6
}
// 여기서 외부함수는 리턴하므로 죽음. 단, 내부함수를 리턴하기 때문에 inner를 호출하면 return 한 함수를 실행함.
inner = outter();
// 결국 외부함수가 종료된 이후에도 내부함수를 통해 접근 가능함.
inner();
