// 3번 : const

// console.log(data, typeof data); 호이스팅불가(ReferenceError)
const data = 10;
console.log(data, typeof data);
data = "2025년";
// console.log(data, typeof data); //TypeError: Assignment to constant variable.
