// 스크롤 이벤트 리스너
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    if (window.scrollY > 0) {
        // 스크롤을 내리면 'scrolled' 클래스를 추가하여 배경색을 흰색으로 변경
        header.style.backgroundColor="white"
        header.style.top="0"
    } else {
        // 스크롤을 위로 올리면 'scrolled' 클래스를 제거하여 원래 상태로 돌아감
        header.style.backgroundColor="transparent"
        header.style.top = "65px";
       
    }
   

});
