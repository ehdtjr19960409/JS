const add_button = document.querySelector("#add-button");
const ul = document.querySelector("#task-list");

function plus(){
   
   //알림창
   const work = prompt("추가할 할일을 입력하세요: ")  
   // const newText = work.value.trim(); //promt text창에 입력받은게 안나옴 -> 제거해야 prompt에서 값이 넘어감

   const li = document.createElement("li");
   li.innerHTML =  `${work}  <button class="delete">삭제</button>`;
   

   ul.appendChild(li);

   ul.value = "";

   li.querySelector(".delete").addEventListener("click", deleteItem);
 
}





function deleteItem(event){
   const liItem = event.target.parentElement;
   ul.removeChild(liItem);
}

add_button.addEventListener("click", plus);


document.querySelectorAll(".delete").forEach((button) => {
   button.addEventListener("click", deleteItem);
 });
