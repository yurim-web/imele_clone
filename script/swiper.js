const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
    autoplay: {
        delay: 3000,
      },
   
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


   // 초기 애니메이션 설정
   gsap.to('.swiper-slide-active .swiper_text', { opacity: 1, y: 0, duration: 1 });

   // 슬라이드 변경 이벤트
   swiper.on('slideChangeTransitionStart', () => {
     // 모든 텍스트를 초기화
     gsap.set('.swiper_text', { opacity: 0, y: 50 });

     // 현재 활성 슬라이드의 텍스트 애니메이션
     gsap.to('.swiper-slide-active .swiper_text', { opacity: 1, y: 0, duration: 1 });
   });