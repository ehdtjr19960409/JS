// // 1번문제

// // ## 1. 매개변수로 두 숫자를 전달받아 합을 반환하는 함수를 작성하기
// // (디폴트 매개변수 1개 사용 기본값 10)

// // ### 일반함수 사용, addNumbers

// function addNumbers(num1 ,num2=10){

//     return num1 + num2;

// } 

// let result = addNumbers(20);
// console.log(result);



// //2번 문제

// // ## 2. 숫자의 제곱을 계산하는 함수 작성하기
// // ### 익명함수 사용, square

// //매개 2개, 리턴값x
// let square = function(i,j){
//     console.log(i ** j);
// }

// square(2,3);



// // ## 3. 가변매개변수를 사용하여 전달받은 모든 숫자의 합 계산하기

// // ### sumAll1 일반함수 -> 모듈 (즉,하나의 기능으로 간주)
// // sumAll2 익명함수 -> 일회성 함수

// function sumAll(...numbers){

//     let resultl3 = 0;
//     // console.log("익명함수에서 호출");
//     for(let i =0; i< numbers.length; i++){
//         resultl3+=numbers[i];
//     }
//     return resultl3;
    
// }


// let result2 = function sumAll1(...numbers){
//     console.log(sumAll(...numbers));
//     // console.log("익명함수에서 리턴 출력");
// }

// result2(10,20,30,60);




// // 4. 콜백함수를 매개변수로 받아 두 숫자를 전달하고 연산결과(사칙연산 모두) 출력하는 
// // oper 만들기

// //사칙연산 모듈
// JavaScript에서 템플릿 리터럴(${})은 문자열 안에서 
// 변수를 삽입할 때 사용되는 여기서는 템플릿 리터럴을 사용할 필요가 없어

function oper(a, b, callback) {
    console.log(`결과 : ${callback(a, b)}`);
}

oper(10, 5, (x, y) => x + y );  // 덧셈 -> 결과: 15
//함수에서 함수를 호출 -> callback함수
//1.  oper(10, 5, (x, y) => x + y ); -> function oper(a,b, callback) 으로 넣는다
//2.  console.log(`결과 : ${callback(a, b)}`);에서 ${callback( )}`는 (x, y) => x + y을 호출한다
//3. ${callback(a, b)}에서 (x, y) => x + y // 결과값을 넣는다
//4. console.log(`결과 : ${callback(a, b)}`); //결과값이 출력된다


oper(10, 5, (x, y) => x - y);  // 뺄셈 -> 결과: 5
oper(10, 5, (x, y) => x * y);  // 곱셈 -> 결과: 50
oper(10, 5, (x, y) => x / y);  // 나눗셈 -> 결과: 2



// ## 5. 사용자 데이터를 배열로 받아 20살 이상인 사용자만 필터링 하는 newUser 함수 만들기

// ### newUser함수는 두개의 매개변수를 받는다
// users : 사용자 이름 배열(ex : [ { name: '짱구', age: 25 }, { name: '철수', age: 18 }, { name: '훈이', age: 30 } ])
// callback : 데이터를 처리할 함수

//매개변수 전달 및 oper 함수->콜백함수

// function newUser(result7, callback){
//     //console.log(result7[1]);  //  호출확인
    
//     //null || undefined check 방법 //정상 출력
//     if(result7 !==null || result7 !== undefined){
//         console.log(result7);
//     }
//     for(let i=0; i<result7.length; i++){
//         //20살 이상인 사용자 필터링
        
//         // console.log('test',result7[2]); // 정상적으로 출력

//          if(20 <= result7[i].age) // -> Object.values해서 error 발생
//         // +)문제 TypeError: Cannot read properties of undefined (reading '0')
        
//             {console.log(result7[i]);}
//     }
// }

// let test = function(result7){
//     console.log(newUser(result7));
// }

// let result6 = [{ name: '짱구', age: 25 }, { name: '철수', age: 18 }, { name: '훈이', age: 30 }];
// let result7 = newUser(result6, test);

// console.log(values);

// ### 6. 비동기 작업 체인

// ### 세 가지 작업을 수행하는 step1, step2, step3가 있습니다. 
// 각 함수는 1초 후에 실행하고 runStep 함수에서 각 단계가 완료되면 다음단계로 넘어가고 
// 마지막에는 모든 함수 호출 완료를 출력한다

// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 완료");
//         callback();
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step 2 완료");
//         callback();
//     }, 1000);
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3 완료");
//         callback();
//     }, 1000);
// }

// function runStep() {
//     step1(() => {
//         step2(() => {
//             step3(() => {
//                 console.log("모든 단계 완료");
//             });
//         });
//     });
// }

// runStep();

