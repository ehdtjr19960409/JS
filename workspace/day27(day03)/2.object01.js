// 2번 : 객체1

const user = {
  name: `신동석`,
  age: 20,
  address: `서울시`,
  instroduce: () => {
    console.log("안녕하세요");
  },
};

console.log(user,typeof user);
console.log(user.instroduce); //[Function: instroduce] 객체안의 함수로 들어가있기 때문
user.instroduce(); //안녕하세요

console.log(user[`address`]); //서울시

// .으로 직접 접근할 수 있고, key값의 규칙성이 필요하다면[``]문법을 사용하여 접근할 수 있다

//실습1
// 1.programming 객체 생성(const로 생성)
// 프로퍼티 키는 pro1~pro4까지
// 프로퍼티 값은 java, dbms, html/css, javascript
const programming ={
  pro1: `java`,
  pro2: `dbms`,
  pro3: `html/css`,
  pro4: `javascript`,
  
};

// 2.객체 출력
console.log(programming);// { pro1: 'java', pro2: 'dbms', pro3: 'html/css', pro4: 'javascript' }


// 3. javascript만 출력하기(방법2개)
console.log(programming.pro1); //java
console.log(programming[`pro1`]); //java


// 4. pro1의 값을 자바로 변경 //상수일때는 변경 불가지만, 객체일 때는 가능
programming.pro1 =`자바`;
console.log(programming.pro1);

// 5. pro5 객체 추가 프로퍼티 값은 git으로 변경
programming.pro5 = `git`;
console.log(programming);
//const는 재할당이 안되어야하지만 객체에서는 내용이 바뀐다

// 6. 객체의 값 출력 
// in으로 사용시 인덱스번호로 나오지만 해당 키값이 나온다
for(let i in programming){
  console.log(i); //인덱스 0~4번방까지 나온다 / 해당 인데스의 프로퍼티 키가 나온다
  console.log(programming[i]); // 키와 값이 같이 나오게된다
  console.log(programming[`i`]); //undefined 로 나오고 키와 값이 찾을 수 없다
}

// for(let j of programming){ 
// //오류발생 -> 객체 사용시에는 in으로만 사용
//   console.log(j);
// }

// ==================================================

// for...in
//   객체의 키(프로퍼티 이름)을 순회한다
//   일반 객체나 배열에서 모두 사용 가능하다
// for...of
//   이터러블(iterable)객체에서만 사용가능 => 배열, 문자열, Map, Set 등 ...
//   순회 시 객체의 값(values)반환한다
//   일반 객체는 이터러블 객체가 아니기 때문에 사용불가하다
//   [Symbol.iterator] 메소드를 가진 객체를 이터러블 객체라고 한다

// 객체를 for...of로 순회하려면 배열로 변환하면 된다
// Object.keys(), Object.values(), Object.entries()를 사용한다


for(let key of Object.keys(programming)){
  console.log(key);
}

for(let values of Object.values(programming)){
  console.log(values);
}

for(let [key,values] of Object.entries(programming)){
  console.log(key,values);
} 

// 객체에 [Symbol.iterator]를 직접 추가해야한다
const program = {
  lang1 : "javascript",
  lang2 : "git",
  lang3 : "jsp",
  [Symbol.iterator] : function* (){
    for(let key in this){
      if(this.hasOwnProperty(key)){
        yield this[key];
      }
    }
  },
};

for(let value of program){
  console.log(value);
}
