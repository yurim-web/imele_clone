const tl = gsap.timeline({ repeat: -1 });


tl.to('.first_text', { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: 'power2.out', 
      onStart: () => {
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
 
  .to('.second_text', { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: 'power2.out', 
      onStart: () => {
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
   
      if (window.scrollY >100) {
        topBanner.classList.add('hidden');
      } else {
        topBanner.classList.remove('hidden');
      }
    });