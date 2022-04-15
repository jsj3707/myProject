var numbers = [20, 10, 9, 8, 7, 12, 3, 1];
// 문자로 정렬기준이 됨.
// sort안의 콜백함수에서 옵션으로 함수를 넘기자.
console.log(numbers.sort(sortFunc));

// 콜백함수 - 오리지널 함수를 호출할때 인자로 사용되는 내부적인?함수
function sortFunc(a, b) {
    return a - b;
}
