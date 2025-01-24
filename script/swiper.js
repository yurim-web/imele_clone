const swiper = new Swiper('.swiper', {
   
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
    autoplay: {
        delay: 3000,
      },
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


   
   gsap.to('.swiper-slide-active .swiper_text', { opacity: 1, y: 0, duration: 1 });

   
   swiper.on('slideChangeTransitionStart', () => {
     
     gsap.set('.swiper_text', { opacity: 0, y: 50 });

     
     gsap.to('.swiper-slide-active .swiper_text', { opacity: 1, y: 0, duration: 1 });
   });