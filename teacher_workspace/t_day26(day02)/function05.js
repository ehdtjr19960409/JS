// 15번 : 콜백함수
// 함수의 매개변수로 전달되어 특정 이벤트가 발생하거나 다른 함수가 호출될 때 실행되는 함수

//콜백함수에 익명함수 정의
function userInput(name, callback){
  console.log("userInput 함수 호출"); //1번 출력문
  callback(name); //2번
  console.log("callback함수 호출 후"); //3번
}

userInput("김영선", function(name){ //2번function(name)
  console.log("익명함수 호출 중"); //2번 출력문
  for(let i = 0; i < 5; i++){
    console.log(name);  //3번 이름 5번 출력
  }
  console.log("익명함수 반복문 끝"); //4번 출력문
});

//두 정수의 덧셈 결과를 출력
function add(num1, num2, callback){
  if(callback){
    callback(num1 + num2);
  }
  return num1 + num2;
}

const print = function (result){
  console.log(`print  익명함수 : ${result}`);
}

const result = add(10, 5, print);
console.log(result);
//print 함수는 콜백함수로 사용된다
//단순히 값을 받아서 console.log를 이용해 출력하는 역할을 한다
//콜백함수로 전달될 때 함수 이름만 전달하는데 add함수는 전달된 print함수를 호출하는 시점에서
//print(result)와 같이 호출하게 된다

//함수를 즉시 호출하는 경우 함수를 즉시 실행시키고 반환값을 전달하는 것이다
//print함수는 반환값이 없으므로 맞지 않다

