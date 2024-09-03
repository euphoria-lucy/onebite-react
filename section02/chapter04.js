// 1. Spread 연산자
// → Spread : 흩뿌리다, 펼치다 라는 뜻
// → 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할
// 장점 : 객체나 배열의 값을 쉽게 흩뿌릴 수 있음

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6]; // ... : Spread 연산자 → arr1 배열의 모든 요소들을 개별로 풀어 헤쳐라는 의미

console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// → Rest는 나머지, 나머지 매개변수
// 여러 개의 매개변수를 받아야 할 때 배열 형태로 한번에 여러 개의 매개변수를 받아올 수 있음
// ★ 주의 : Rest 매개변수 뒤에는 추가적으로 매개변수를 더 선언할 수가 없음

function funcB(one, two, ...rest) {
  console.log(rest);
}

funcB(...arr1);
