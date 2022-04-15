// 내부객체를 리턴하는 외부함수를 선언
function factory_movie(title) {
    return {
        // 외부함수의 지역변수(매개변수)를 리턴함.
<<<<<<< HEAD
        get_title: function() {
            return title;
        },
        // 외부함수의 지역변수(매개변수)에 value 설정함.
        set_title: function(_title) {
            if (typeof _title == 'String') {
=======
        get_title : function(){
            return title;
        },
        // 외부함수의 지역변수(매개변수)에 value 설정함.
        set_title : function(_title){
            if(typeof _title == 'String'){
>>>>>>> 96fd2d99ec40684dbaed100ac8fcf6f6341dbdc6
                title = _title
            } else {
                alert('제목은 문자열이어야 합니다.');
            }
        }
    }
}

// 객체는 똑같지만 외부함수의 title변수에 담겨있는 값은 다름.
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

// Ghost in the shell인 value를 공각기동대로 변경.
ghost.set_title('공각기동대');

alert(ghost.get_title()); // 공각기동대
alert(matrix.get_title()); // Matrix

/* 여기서 private variable은 외부함수의 지역변수인 title임.
     외부함수의 수명은 끝난 시점에 title이란 지역변수는 get_title, set_title을 통해서만 접근가능함.
     큰 규모의 소프트웨어의 경우 협업을 하기 때문에 title이란 변수를 누구나 접근하면 소프트웨어가 망가질 가능성이 큼.
     즉, 클로저는 private variable을 사용할 수 있는 유용한 테크닉임.
*/
