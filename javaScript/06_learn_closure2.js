// var arr = []
// for(var i = 0; i < 5; i++){
//     arr[i] = function(){
// 리턴하는 i는 함수의 외부 변수가 아니기때문.
//         return i;
//     }
// }
//
// for(var index in arr){
//     console.log(arr[index]);
// }
/* 결과
5
5
5
5
5
*/

var arr = []
for (var i = 0; i < 5; i++) {
    // 매개변수id에는 i의 값이 들어감.
    arr[i] = function(id) {
        return function() {
            return id;
        }
    }(i); // 외부함수의 인자값  = i
}

for (var index in arr) {
    console.log(arr[index]);
}

/* 결과
0
1
2
3
4
*/
