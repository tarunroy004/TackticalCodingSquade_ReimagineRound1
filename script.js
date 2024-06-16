// Mouse Move 
Shery.mouseFollower({
    skew: true,
});
// Magnet Effect
Shery.makeMagnet("#btn", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
});
Shery.makeMagnet("#magnet", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
});

// Menu Button On off Animation
let menu = 0;
document.querySelector("#btn").addEventListener("click", function() {
    if(menu == 1) {
        gsap.to("#nav", {
            width : "100%",
            boxShadow: "0 0 0",
            duration: 0.6,
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
        gsap.to("#menuItem", {
            opacity: 0,
            duration: 0.2,
            ease: "power1"
        })
        menu = 0;
    } else {
        gsap.to("#nav", {
            width : "50vw",
            height: "98vh",
            boxShadow: "0 0 50px #ffffff67",
            duration: 0.5,
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
        gsap.to("#menuItem", {
            opacity: 1,
            duration: 0.5,
            ease: "power2"
        })
        menu = 1;
    }
})
document.querySelector("#main").addEventListener("click", function() {
    if(menu == 1) {
        gsap.to("#nav", {
            width : "100%",
            boxShadow: "0 0 0",
            duration: 0.6,
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
        gsap.to("#menuItem", {
            opacity: 0,
            duration: 0.2,
            ease: "power1"
        })
        menu = 0;
    }
})

//Menu Items Anit=mation
//opt1
document.querySelector(".option1").addEventListener("mouseenter", function() {
    gsap.to(".option1 .oneth", {
        top: "-100%",
        duration: "0.3"
    })
    gsap.to(".option1 .twoth", {
        top: "0",
        duration: "0.3"
    })
})
document.querySelector(".option1").addEventListener("mouseleave", function() {
    gsap.to(".option1 .oneth", {
        top: "0",
        duration: "0.3"
    })
    gsap.to(".option1 .twoth", {
        top: "100%",
        duration: "0.3"
    })
})
//opt2
document.querySelector(".option2").addEventListener("mouseenter", function() {
    gsap.to(".option2 .oneth", {
        top: "-100%",
        duration: "0.3"
    })
    gsap.to(".option2 .twoth", {
        top: "0",
        duration: "0.3"
    })
})
document.querySelector(".option2").addEventListener("mouseleave", function() {
    gsap.to(".option2 .oneth", {
        top: "0",
        duration: "0.3"
    })
    gsap.to(".option2 .twoth", {
        top: "100%",
        duration: "0.3"
    })
})
//opt3
document.querySelector(".option3").addEventListener("mouseenter", function() {
    gsap.to(".option3 .oneth", {
        top: "-100%",
        duration: "0.3"
    })
    gsap.to(".option3 .twoth", {
        top: "0",
        duration: "0.3"
    })
})
document.querySelector(".option3").addEventListener("mouseleave", function() {
    gsap.to(".option3 .oneth", {
        top: "0",
        duration: "0.3"
    })
    gsap.to(".option3 .twoth", {
        top: "100%",
        duration: "0.3"
    })
})
//opt4
document.querySelector(".option4").addEventListener("mouseenter", function() {
    gsap.to(".option4 .oneth", {
        top: "-100%",
        duration: "0.3"
    })
    gsap.to(".option4 .twoth", {
        top: "0",
        duration: "0.3"
    })
})
document.querySelector(".option4").addEventListener("mouseleave", function() {
    gsap.to(".option4 .oneth", {
        top: "0",
        duration: "0.3"
    })
    gsap.to(".option4 .twoth", {
        top: "100%",
        duration: "0.3"
    })
})

//Nav 2
gsap.to("#nav2", {
    bottom: "5%",
    opacity: 1,
    ease: "power2",
    scrollTrigger : {
        trigger: "#page2",
        scroller: "body",
        start: "top 50%",
    }
})
gsap.to("nav", {
    left: "110%",
    opacity: 0,
    duration: "1.5",
    ease: "power2",
    scrollTrigger : {
        trigger: "#page2",
        scroller: "body",
        start: "top 50%",
    }
})

document.querySelector("#nav2").addEventListener("mouseover", () => {
    gsap.to("#nav2 i", {
        left: "50%",
        rotate: "180deg",
        duration: "0.3",
        ease: "powwer1",
    })
    gsap.to("#nav2 h1", {
        left: "100%",
        opacity: 0,
        duration: "0.3",
        ease: "powwer1",
    })
    gsap.to("#nav2 #button", {
        width: "240px",
        duration: "0.3",
        ease: "powwer1",
    })
})

document.querySelector("#nav2").addEventListener("mouseleave", () => {
    gsap.to("#nav2 i", {
        left: "20%",
        rotate: "90deg",
        duration: "0.5",
        ease: "power2"
    })
    gsap.to("#nav2 h1", {
        left: "65%",
        opacity: 1,
        duration: "0.5",
        ease: "power2"
    })
    gsap.to("#nav2 #button", {
        width: "210px",
        duration: "0.5",
        ease: "power2"
    })
})
document.querySelector("#nav2").addEventListener("click", () => {
    gsap.to("#nav2 #button", {
        opacity: 0,
        zIndex: "998",
        duration: "0.2",
        ease: "power2"
    })
    gsap.to("#nav2 #items", {
        opacity: 1,
        zIndex: "1000",
        top: "-213px",
        duration: "0.5",
        ease: "power2"
    })
})
document.querySelector("#nav2 #items").addEventListener("mouseleave", ()=> {
    gsap.to("#nav2 #button", {
        opacity: 1,
        zIndex: "999",
        duration: "0.5",
        ease: "power2"
    })
    gsap.to("#nav2 #items", {
        opacity: 0,
        zIndex: "997",
        top: "170px",
        duration: "0.5",
        ease: "power2"
    })
})
//PAge 2 



