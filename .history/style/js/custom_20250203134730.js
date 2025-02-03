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