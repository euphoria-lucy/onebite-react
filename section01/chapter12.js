// 1. 함수 표현식
// 함수 표현식으로 만든 함수는 호이스팅이 되지 않음

function funcA() {
  // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
  // console.log("funcB");
};

varB();

// 2. 화살표 함수
// 함수를 이전보다 더 빠르고 간결하게 생성해 줄 수 있도록 도와주는 문법
// value : 매개변수

let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
