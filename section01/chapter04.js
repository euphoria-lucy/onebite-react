// 1. 변수 → 값 변화 가능
let age;

age = 30;

// 2. 상수 → 값 변화 불가능, 선언과 동시에 초기화해야함
const birth = "2005.07.12";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
