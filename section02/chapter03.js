// 구조 분해 할당 : 배열이나 객체에 저장된 여러 개의 값들을 분해해서 각각 다른 변수에 할당하는 문법

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; // → arr의 1은 one, 2는 two, 3은 three에 각각 할당됨, four에는 4라는 값이 선언과 동시에 할당됨
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "박지환",
  age: 20,
  hobby: "야구",
};

// ★ 객체는 중괄호를 이용해야함!!
let { name, age: myAge, hobby, extra = "hello" } = person;
console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
