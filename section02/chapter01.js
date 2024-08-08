// 1. Falsy한 값
// undefined, null, 0, 음수 0, NaN, 빈 문자열 → Falsy한 값으로써 조건문에서 거짓으로 평가됨

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// if (!f1) {
//   console.log("falsy");
// }

// 2. Truthy한 값
// → 7가지 Falsy한 값들 제외한 나머지 모든 값

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// if (t5) {
//   console.log("Truthy");
// }

// 3. 활용 사례
function printName(person) {
  if (!person) {
    // ↑ if (person === undefined || person === null) 대체
    console.log("person의 값이 없음");
    return;
  }

  console.log(person.name);
}

let person;
printName(person);
