const navLogin = document.querySelector(".nav--login");
const modalBox = document.querySelector(".modal-box");
const xBox = document.querySelector(".x-box");

navLogin.addEventListener("click", function(){
  modalBox.style.display ="flex";
});

xBox.addEventListener("click", function(){
  modalBox.style.display = "none";
});

// 현재 로그인 버튼 클릭시 모달창 까지 뜸

xBox.addEventListener("mouseover", function(){
  this.style.color="red";
})

xBox.addEventListener("mouseout", function(){
  this.style.color="black";
})