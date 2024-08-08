// 단락평가 : 논리 연산식에서 첫 번째 피연산자의 값만으로도 연산의 결과를 확정할 수 있다면 두 번째 피연산자에는 접근조차 하지 않는 실행 방식
// ▷ 특정 조건에 맞춰서 함수를 아예 호출하지 않도록 방지할 수 있는 기능 가지고있음

// function returnFalse() {
//   console.log("False 함수");
//   // return false;
//   return undefined;
// }

// function returnTrue() {
//   console.log("True 함수");
//   // return true;
//   return 10;
// }

// console.log(returnFalse() && returnTrue()); // False 함수, false
// console.log(returnTrue() && returnFalse()); // True 함수, False 함수, false
// console.log(returnTrue() || returnFalse()); // True 함수, true
// console.log(returnTrue() || returnFalse()); // True 함수, 10
// console.log(returnFalse() && returnTrue()); // False 함수, undefined

// 단락 평가 활용 사례
function printName(person) {
  // if (!person) {
  //   console.log("person에 값이 없음");
  //   return;
  // }

  // console.log(person && person.name); // if문의 역할을 수행하는 문장
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // 두 번째 피연산자 값에 접근하지 않음 → 단락평가
printName({ name: "박지환" });

// Truthy 값 A || Truthy 값 B → Truthy 값 A 반환
// Truthy 값 A && Truthy 값 B → Truthy 값 B 반환
