window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    if (window.scrollY > 0) {
        header.style.backgroundColor="white"
        header.style.top="0"
    } else {
        header.style.backgroundColor="transparent"
        header.style.top = "65px";
       
    }
   
});
