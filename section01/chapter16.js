// 함수 아닌 프로퍼티들 : 객체의 정보를 가지고 있음
// 함수인 프로퍼티들 : 메서드로써 객체의 동작을 정의함

// 1. 상수 객체
// 상수에다가 객체를 보관하더라도 프로퍼티를 추가하거나 수정, 삭제의 조작은 가능

const animal = {
  type: "고양이",
  name: "코코",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 메서드
// 값이 함수인 프로퍼티를 의미

const person = {
  name: "박지환",

  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
