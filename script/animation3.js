gsap.registerPlugin(ScrollTrigger);
const timeline4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section5",
      start: "-150% top",
      end: "bottom bottom",
    },
  });
  
  timeline4.to(".section5_title", {
      duration: 1,
      opacity: 1,
      x: 0,
    })
    .to(".section5_view", {
      duration: 1,
      opacity: 0.6,
      x: 0,
    },"0"); 



    const timeline5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section6",
          start: "-45% top",
          end: "bottom bottom",
    
          
        },
      });
      
      timeline5.to(".section6_title", {
          duration: 1,
          opacity: 1,
          x: 0,
        })
        .to(".section6_view", {
          duration: 1,
          opacity: 0.6,
          x: 0,
        },"0")
        
        .to(".animation_title", {
            duration: 0.8,
            opacity: 1,
            y: 0,
          },)
        
        ; 