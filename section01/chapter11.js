// 함수

// 매개변수 : 함수를 정의하면서, 함수 선언식의 괄호'()'안에 작성한 변수명
// 인수 : 함수를 호출할 때 사용되는 값

let area1 = getArea(65, 93);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

let area3 = getArea(91, 63);
console.log(area3);

// 호이스팅
// → "끌어올리다" 라는 뜻

function getArea(width, height) {
  function another() {
    // 중첩함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area; // 반환값
}
