// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// key : value
let person = {
  name: "박지환",
  age: 20,
  hobby: "야구",
  job: "BaseBall player",
  extra: {},
  10: 20,
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

// 점 표기법
// → 존재하지 않는 프로퍼티에 접근할 경우 undefined
let name = person.name;

// 괄호 표기법
// 동적으로 프로퍼티를 변화시키면서 가져와야할 경우 사용
// ★ 프로퍼티의 키를 문자열로 작성하지 않으면 변수로 인식하여 오류 발생
// 존재하지 않는 프로퍼티에 접근할 경우 undefined
let age = person["age"];

let property = "hobby";
let hobby = person[property];

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "Baseball Player";
person["favoriteFood"] = "크림새우";

// 3-3. 프로퍼티를 수정하는 방법
person.job = "baseball player";
person["favoriteFood"] = "연어초밥";

// 3-4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
