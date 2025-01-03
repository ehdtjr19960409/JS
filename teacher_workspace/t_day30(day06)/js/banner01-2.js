//jquery
let $slideBox = $(".slide-box");
let $slideImg = $(".slide-img");

//슬라이드 박스 너비, 현재 인덱스, 슬라이드 개수(총 슬라이드 이미지 수)
let slideWidth = 800;
let currentIdx = 0;
let $slideCnt = $slideImg.length;

//슬라이드가 처음이나 마지막에 도달했는지 확인하고 이전/다음 버튼을 표시 or 숨김처리
function checkEnd(){
  if(currentIdx <= 0){
    $('.prev').css("display", "none");
  }else{
    $(".prev").css("display", "block");
  }

  if(currentIdx >= slideCnt - 1){
    $('.next').css("display", "none");
  }else{
    $(".next").css("display", "block");
  }
}

checkEnd();

//다음 버튼 클릭시 발생하는 이벤트
$(".next").on("click", function(){
  currentIdx++;
  $slideBox.css("left", -(currentIdx * slideWidth));
  $slideBox.css("transition", "0.5s ease");
  checkEnd();
});

