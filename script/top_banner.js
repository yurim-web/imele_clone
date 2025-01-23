const tl = gsap.timeline({ repeat: -1 }); // 무한 반복 설정

// 첫 번째 텍스트 애니메이션
tl.to('.first_text', { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: 'power2.out', 
      onStart: () => {
        // 첫 번째 텍스트가 보이는 동안 두 번째 텍스트 숨김
        gsap.set('.second_text', { opacity: 0 });
      }
    })
  .to('.first_text', { 
      opacity: 0, 
      y: -10, 
      duration: 1, 
      ease: 'power2.in', 
      delay: 1 
    })
  // 두 번째 텍스트 애니메이션
  .to('.second_text', { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: 'power2.out', 
      onStart: () => {
        // 두 번째 텍스트가 보이는 동안 첫 번째 텍스트 숨김
        gsap.set('.first_text', { opacity: 0 });
      }
    })
  .to('.second_text', { 
      opacity: 0, 
      y: -10, 
      duration: 1, 
      ease: 'power2.in', 
      delay: 1 
    });


    const topBanner = document.querySelector('.top_banner');

    window.addEventListener('scroll', () => {
      // 스크롤 위치가 100px 이상이면 배너 숨기기
      if (window.scrollY >100) {
        topBanner.classList.add('hidden');
      } else {
        // 스크롤 위치가 다시 100px 미만이면 배너 보이기
        topBanner.classList.remove('hidden');
      }
    });