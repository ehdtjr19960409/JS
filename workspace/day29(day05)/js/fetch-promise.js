//12번

fetch("https://jsonplaceholder.typicode.com/users").then((response) => 
response.json()).then(console.log);

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) =>{
//   // console.log(response.ok);
//   if(!response.ok){
//     throw new Error(`response : ${response.status}`);
//   }
//   return response.json();
//   // else{
//   //   console.log(`${response.status}`);
//   // }
// }).then((post) => { //15~24까지 필요한 데이터를 추출
//   if(!post){
//     throw new Error(`none result`);
//   }
//   return post.map((user) => ({
//     id : user.id,
//     name : user.name,
//     email : user.email,
//   }));
// }).then(console.log);