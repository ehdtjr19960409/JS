// 14번 : 익명함수

let printAll = function(num){
  console.log(num);
};

printAll(100);

//매개변수로 전달한 값이 짝수라면 +10한 값을 출력 
  // -> typeof방식으로 숫자가 아닐때 체크
//아니라면 전달된 값만 출력
//result 변수, 익명함수 이용

//resutl 변수 사용
let result = function(num){
  //매개변수로 전달한 값이 짝수 -> if문 사용
  //매개변수가 짝수일 때의 조건
  if(typeof num === `number`){
    if(num%2===0){
      //짝수이면  +10으로 출력
      console.log(num+10);
    }else{
      console.log(num);
    }
  }else{
    console.log(`숫자가 아닙니다`);
  }
};

 result(`ㅁㅁ`);


//  ---------------------
//매개변수로 전달한 값이 짝수라면 +10한 값을 출력
//아니라면 전달된 값만 출력
//result 변수, 익명함수 이용

//1) let 변수 = function(num) 익명함수 정의 매개변수 1개
//2) 조건문 if~else문
//  if(타입이 number이고 2로 나눈 나머지가 0이라면-타입과 값이 같다면)
//    매개변수 + 10 출력
//  else 
//    매개변수 출력

// let result = function (num){
//   if(typeof num === 'number' && num % 2 === 0){
//     console.log(num + 10);
//   }else{
//     console.log(num);
//   }
// };

// result('10'); //타입이 다르므로 값 자체 출력됨
// result(15);
// console.log(typeof '10');


// ----------------------
let square = function(x){
  return x *x;

};

console.log(square(10));

setTimeout(function(){
  console.log(`2초 뒤 출력`);
},1000);


