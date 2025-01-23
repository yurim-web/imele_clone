gsap.registerPlugin(ScrollTrigger);
const timeline1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "-30% top",
    end: "bottom bottom",
  },
});

timeline1.to(".section2_title", {
    duration: 1,
    opacity: 1,
    x: 0,
  })
  .to(".section2_view", {
    duration: 1,
    opacity: 0.6,
    x: 0,
  },"0"); 
  

