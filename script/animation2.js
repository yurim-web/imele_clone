const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "-45% top",
    end: "bottom bottom",
  },
});

timeline2.to(".section3_title", {
    duration: 1,
    opacity: 1,
    y: 0,
  })
  .to(".section3_detail", {
    duration: 1,
    opacity: 1,
    y: 0,
  },"0"); 


const timeline3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section4",
     
     
      start: "-45% top",
      end: "bottom bottom",
    },
  });
  
  timeline3.to(".icon_box_down", {
      duration: 1,
      opacity: 1,
      y: 0,
    })
    .to(".icon_box_top", {
      duration: 1,
      opacity: 1,
      y: 0,
    },"0"); 