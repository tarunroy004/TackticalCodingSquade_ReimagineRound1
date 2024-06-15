Shery.mouseFollower({
    skew: true,
  });
Shery.makeMagnet("#btn", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
});

let menu = 0;
document.querySelector("#btn").addEventListener("click", function() {
    if(menu == 1) {
        gsap.to("nav", {
            width : "5%",
            duration: 1,
            ease: "power2"
        })
        gsap.to(".bar", {
            rotate: "0deg",
            top: "50%",
            left: "50%",
            duration: 0.4,
            ease: "power2"
        })
        gsap.to(".close", {
            rotate: "0deg",
            top: "110%",
            left: "110%",
            duration: 0.5,
            ease: "power2"
        })
        menu = 0;
    } else {
        gsap.to("nav", {
            width : "50%",
            duration: 1,
            ease: "power2"
        })
        gsap.to(".bar", {
            rotate: "-180deg",
            top: "-10%",
            left: "-10%",
            duration: 0.4,
            ease: "power2"
        })
        gsap.to(".close", {
            rotate: "-360deg",
            top: "50%",
            left: "50%",
            duration: 0.5,
            ease: "power2"
        })
        menu = 1;
    }
})
document.querySelector("#main").addEventListener("click", function() {
    if(menu == 1) {
        gsap.to("nav", {
            width : "5%",
            duration: 1,
            ease: "power2"
        })
        gsap.to(".bar", {
            rotate: "0deg",
            top: "50%",
            left: "50%",
            duration: 0.4,
            ease: "power2"
        })
        gsap.to(".close", {
            rotate: "0deg",
            top: "110%",
            left: "110%",
            duration: 0.4,
            ease: "power2"
        })
        menu = 0;
    }
})


