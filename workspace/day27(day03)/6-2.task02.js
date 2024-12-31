//1. 나이가 19살 이상이면 입장가능, 19살 미만이면 입장 불가 출력
// 나이가 10살이면 당첨을 출력하고 아니면 다음기회에 출력
// 본인이름, 나이는 상수로 설정, 삼항연산자 사용할 것 //callback 함수

 const info = [{name : `신동석`, age : 30}];

// const info1 = info.map(function(element){
//     return (element.age >=19 ? `입장 가능` : `입장불가`);  
// });


// const info2 = info.map(function(element){
//     return (element.age ===10 ? `당첨`:`다음기회에`);  
// });

//  console.log(info1, info2);
//출력결과
// 본인이름님은 00살 입장가능여부는 결과 
// 이벤트 당첨여부
//출력 
const info1 = info.map(function(element){
     
    return(element.age >=19 ? 
       console.log(`${element.name}님은 ${element.age}살 입장 가능`) : console.log(`${element.name}님은 ${element.age}살 불가능`), element.age ===10 ? `당첨` : `미당첨`);
    // return ( element.age >=19 ? `입장가능` : element.age === 10 ? `입장불가 및 당첨` :  `입장불가 및 다음 기회에`);
});

const info3 = [
    {name : `박승우`, age : 30},
    {name : `신짱구`, age : 5},
    {name : `신짱아`, age : 10}
  ];
   
  
  
  const info12 = info3.map(function(element){
       
    // return(element.age >=19 ? 
    //    console.log(`${element.name}님은 ${element.age}살 입장 가능`) : console.log(`${element.name}님은 ${element.age}살 불가능`), element.age ===10 ? `당첨` : `미당첨`);
    // // return ( element.age >=19 ? `입장가능` : element.age === 10 ? `입장불가 및 당첨` :  `입장불가 및 다음 기회에`);
  
    return(element.age >= 19 ? `${element.name}님은 ${element.age}살 입장 가능` :`${element.name}님은 ${element.age}살 불가능` ) + ` ` + (element.age ===10 ? `당첨` : `미당첨`)
  
  
  });
  
  console.log(info12);




//2. 점수가 60점 이상이면 합격, 60점 미만이면 불합격출력
// 점수가 100점이면 장학생, 아니면 일반학생 출력
// 학생이름, 점수는 상수로 설정

const name = `가나다`;
const score = 60;

const result = score >= 60 ? `합격` : `불합격`;
console.log(name, result);

const result1 = score === 100 ? `장학생`: `일반학생`;
console.log(name, result1);

//3. 학생의 이름과 성적을 입력받아서 성적에 따른 학점 출력
// 90점 이상 : A, 80점 이상 : B,  70점이상 : C, 그외 : F

//4. 1부터 100까지의 숫자중 3, 6, 9의 배수 합계 출력

