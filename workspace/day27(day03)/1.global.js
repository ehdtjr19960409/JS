// 1번 : global

globalThis.num; //전역객체에 num변수를 선언
console.log(globalThis.num);
let num1 = 10;
let num2 = 20;
console.log(num1,num2);

function changeNumber(num1,num2){
  globalThis.num= num1; //globalThis를 통해 전역변수 num을 num1값으로 설정
  console.log(globalThis.num); //10
  // console.log(num1,num2);

  num1 = num2; // 20
  num2 = globalThis.num; //10
  console.log(num1, num2); // 20 10

}
// changeNumber(5,10);
changeNumber(num1,num2);
console.log(globalThis.num); //10

console.log("==========================");

//globalThis는 객체를 사용해서 전역변수를 설정하고 함수 내부에서 변수 값을 변경
//globalThis는 자바스크립트 환경에 따라 전역 객체에 접근하는 방법이 달라 코드의 이식성이 떨어지는 것을 극복하기 위해
// 도입된 표준화된 방법(ES11에서 도입된 표준 객체)

//globalThis를 이용한 전역 문자열
globalThis.str = `hello`; // 전역 객체에 str 변수를 선언
console.log(globalThis.str); //Hello

function data(){
  globalThis.str = `값 변경`; //함수안에서 전역객체 선언 후 값 변경
  let number = `숫자`; //블록 스코프 변수
}

console.log(data()); //리턴값 x -> undefined
console.log(number); //오류발생(ReferenceError: number is not defined) 
                     // -> let,var 블록스코프 범위가 함수안 {}안에 있으므로

console.log(globalThis.str);//값변경 출력 => 전역객체에 변수를 설정할 수 있고 함수밖에서도 접근 가능

console.log("==========================");




