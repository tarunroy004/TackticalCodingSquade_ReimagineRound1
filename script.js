// Mouse Move 
if (window.innerWidth > 480 ) {
    Shery.mouseFollower({
        skew: true,
    });
}
// Magnet Effect
Shery.makeMagnet("#btn", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
});
Shery.makeMagnet("#magnet", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
});

//Nav 2
if (window.innerWidth > 480) {
    gsap.from("#nav2", {
        bottom: "-10%",
        opacity: 0,
        ease: "power1",
        scrollTrigger : {
            trigger: "#page2",
            scroller: "body",
            markers: false,
            start: "top 90%",
            end: "top 80%",
            scrub: 1
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
}
if (window.innerWidth <= 480) {
    document.querySelector("#nav2").addEventListener("click", () => {
        gsap.to("body", {
            overflowY: "hidden"
        })
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
            height: "65px",
            width: "180px",
            duration: "0.3",
            ease: "powwer1",
        })
        setTimeout(() => {
            openNav();
        }, 300);
        document.querySelector("#main").addEventListener("click", ()=> {
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
                width: "170px",
                height: "63px",
                duration: "0.5",
                ease: "power2"
            })
        })
    })
    function openNav() {
        gsap.to("#nav2 #button", {
            opacity: 0,
            zIndex: "998",
            duration: "0.2",
            ease: "power2"
        })
        gsap.to("#nav2 #items", {
            opacity: 1,
            zIndex: "1000",
            top: "-182px",
            duration: "0.4",
            ease: "power4"
        })
    }
}


// circle

document.querySelector("#page1").addEventListener("mousemove", function(dets) {
    gsap.to("#page1 #cir", {
        left: dets.x,
        top: dets.y,
        duration:2,
        ease: "power4.out",
        delay: 0.2
    })
})
document.querySelector("#page1").addEventListener("mouseleave", function(dets) {
    gsap.to("#page1 #cir", {
        left: "50%",
        top: "50%",
        duration:2,
        ease: "power4.out",
        delay: 0.2
    })
})


//PAge 2 
if (window.innerWidth > 480) {
    gsap.from("#page2 #cards .img1 img", {
        scale: 0.5,
        top: "100%",
        left: "56.5%",
        rotate: "90deg",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            markers: false,
            start: "top 50%",
            end: "top 25%",
            scrub: 2,
        }
    })
    gsap.from("#page2 #cards .img2 img", {
        scale: 0.5,
        top: "100%",
        left: "56.5%",
        rotate: "-90deg",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            markers: false,
            start: "top 40%",
            end: "top 15%",
            scrub: 2,
        }
    })
    gsap.from("#page2 #cards .img3 img", {
        scale: 0.5,
        top: "100%",
        left: "56.5%",
        rotate: "90deg",
        scrollTrigger: {
            trigger: "#page2 #text",
            scroller: "body",
            markers: false,
            start: "top 20%",
            end: "top 5%",
            scrub: 2,
        }
    })
    gsap.from("#page2 #cards .img4 img", {
        scale: 0.5,
        top: "100%",
        left: "56.5%",
        rotate: "-90deg",
        scrollTrigger: {
            trigger: "#page2 #text",
            scroller: "body",
            markers: false,
            start: "top 10%",
            end: "top 0%",
            scrub: 2,
        }
    })
}



// Page 3 
// Text
if (window.innerWidth > 480) {
    gsap.from("#page3 .heading",{
        opacity: 0,
        scrollTrigger: {
            trigger: "#page3 .heading",
            scroller: "body",
            markers: false,
            start: "top 70%",
            stagger: "0.5"
        }
    })
}




// Page 4 
// card1 to 5
if (window.innerWidth > 480) {
    gsap.from("#page4 .card1", {
        scale: 0.5,
        top: "35%",
        left: "56.5%",
        rotate: "0deg",
        scrollTrigger: {
            trigger: "#page4 .card1",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "top 25%",
            scrub: 2,
        }
    })
    gsap.from("#page4 .card2", {
        scale: 0.5,
        top: "36.5%",
        left: "54%",
        rotate: "0deg",
        scrollTrigger: {
            trigger: "#page4 .card2",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "top 25%",
            scrub: 2,
        }
    })
    gsap.from("#page4 .card3", {
        scale: 0.5,
        top: "40%",
        left: "50%",
        rotate: "0deg",
        scrollTrigger: {
            trigger: "#page4 .card3",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "top 25%",
            scrub: 2,
        }
    })
    gsap.from("#page4 .card4", {
        scale: 0.5,
        top: "41%",
        left: "50%",
        rotate: "0deg",
        scrollTrigger: {
            trigger: "#page4 .card4",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "top 25%",
            scrub: 2,
        }
    })
    gsap.from("#page4 .card5", {
        scale: 0.5,
        top: "35%",
        left: "59%",
        rotate: "0deg",
        scrollTrigger: {
            trigger: "#page4 .card5",
            scroller: "body",
            markers: false,
            start: "top 60%",
            end: "top 25%",
            scrub: 2,
        }
    })
}



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