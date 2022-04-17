o1 = {
    val1: 1,
    val2: 2,
    val3: 3
}
o2 = {
    v1: 10,
    v2: 50,
    v3: 100,
    v4: 25
}

function sum() {
    var _sum = 0;
    for (name in this) {
        _sum += this[name];
    }
    return _sum;
}

// sum함수 내부의 this = o1
// 즉 o1이라는 객체의 sum이라는 메소드가됨. (o1.sum)
alert(sum.apply(o1));
// sum함수 내부의 this = o2
// 즉 o2이라는 객체의 sum이라는 메소드가됨. (o2.sum)
alert(sum.apply(o2));
