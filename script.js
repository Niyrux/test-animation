document.addEventListener("DOMContentLoaded", function () {
    // Registrez ScrollTrigger avec GSAP
    gsap.registerPlugin(ScrollTrigger);
    // Sélectionnez tous les paires de .box et .test
    gsap.from(".test1", {
        scrollTrigger: {
            trigger: ".box1",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
        },
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none"
    });
    gsap.from(".test2", {
        scrollTrigger: {
            trigger: ".box2",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
        },
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none"
    });
    gsap.from(".test3", {
        scrollTrigger: {
            trigger: ".box3",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
        },
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none"
    });
    gsap.from(".test4", {
        scrollTrigger: {
            trigger: ".box4",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
        },
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none"
    });

})

