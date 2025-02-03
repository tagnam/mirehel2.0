
// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });




gsap.registerPlugin(ScrollTrigger);
    
gsap.to(".service-left", {
    scrollTrigger: {
        trigger: ".service-section",
        start: "top top", // Ensures the section is fully visible before pinning
        end: "70% top",
        pin: ".service-left",
        // pinSpacing: true, // Prevents overlapping
        scrub: 1,
        // markers: true
    }
});


