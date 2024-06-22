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
        gsap.to("body", {
            overflowY: "auto"
        })
        gsap.to("#nav", {
            backgroundColor: "transparent",
            backdropFilter: "none",
            width : "100%",
            duration: 0.6,
            ease: "power2"
        })
        gsap.to("#nav2", {
            zIndex: 999,
            opacity: 1,
            duration: 0.2,
            ease: "power1"
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
        gsap.to(".yt", {
            zIndex: 1999,
        })
        menu = 0;
    } else {
        gsap.to("body", {
            overflowY: "hidden"
        })
        gsap.to("#nav", {
            backgroundColor: "rgba(37, 37, 37, 0.26)",
            backdropFilter: "blur(10px)",
            width : "50vw",
            duration: 0.5,
            ease: "power2"
        })
        gsap.to("#nav2", {
            zIndex: 1,
            opacity: 0,
            duration: 0.2,
            ease: "power1"
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
        gsap.to(".yt", {
            zIndex: 1,
        })
        menu = 1;
    }
})
document.querySelector("#main").addEventListener("click", function() {
    if(menu == 1) {
        gsap.to("body", {
            overflowY: "auto"
        })
        gsap.to("#nav", {
            backgroundColor: "transparent",
            backdropFilter: "none",
            width : "100%",
            duration: 0.6,
            ease: "power2"
        })
        gsap.to("#nav2", {
            zIndex: 999,
            opacity: 1,
            duration: 0.2,
            ease: "power1"
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
        gsap.to(".yt", {
            zIndex: 1999,
        })
        menu = 0;
    }
})

//Menu Items Anitmation
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

//Nav 1

//Nav 2

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
    gsap.to("body", {
        overflowY: "hidden"
    })
    gsap.to("#nav2 #button", {
        opacity: 0,
        zIndex: "998",
        duration: "0.2",
        ease: "power2"
    })
    gsap.to("#nav2 #items", {
        opacity: 1,
        zIndex: "1000",
        top: "-240px",
        duration: "0.5",
        ease: "power2"
    })
})
document.querySelector("#nav2 #items").addEventListener("mouseleave", ()=> {
    gsap.to("body", {
        overflowY: "auto"
    })
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

//page 1

// Time Reach
window.addEventListener('load', function () {
    function addZ(num) {
      return num < 10 ? `0${num}` : num;
    }
  
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();
    let hours = addZ(today.getHours());
    let minutes = addZ(today.getMinutes());
    let seconds = addZ(today.getSeconds());
  
    let current_time = `${hours}:${minutes}:${seconds}`;
    time.innerHTML = current_time;
  
  })
  let time = document.querySelector(".time");
  let timeBtn = document.querySelector(".clickTime");
  
  window.addEventListener("mousemove", function () {
    function addZ(num) {
      return num < 10 ? `0${num}` : num;
    }
  
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();
    let hours = addZ(today.getHours());
    let minutes = addZ(today.getMinutes());
    let seconds = addZ(today.getSeconds());
  
    let current_time = `${hours}:${minutes}:${seconds}`;
    time.innerHTML = current_time;
  
  })