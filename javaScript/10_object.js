//
// var person = {} // object
//
// person.name = 'jsj'; // objecet의 property
// person.introduce = function () { // object의 method
//     return 'Myname is ' + this.name; // this = person
// }
//
// document.write(person.introduce());
// // person객체를 여러개 만들경우 중복발생함.
// // 객체 하나 수정될 경우 동일한거 전부 수정해야됨.
//
// // 생성자는 객체를 만드는 역할을 하는 함수.
// function Person() {}
// // 함수앞에 new가 붙으면 함수라 하지않고 생성자라고함.
// // console로 p0찍어보면 Person 객체가 찍힘.
// var p0 = new Person();

// Person이란 생성자는 객체의 초기화임.
function Person(name) {
    this.name = name;
    this.introduce = function(){
        return 'My name is ' + this.name;
    }
}

var p1 = new Person('egoing');
document.write(p1.introduce() + "<br />");

var p2 = new Person('leezche');
document.write(p2.introduce() + "<br />");
