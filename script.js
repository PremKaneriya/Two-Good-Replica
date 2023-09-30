const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function videoConAnimation() {
    var videocon = document.querySelector("#video-container")
    var playBtn = document.querySelector("#play")
    videocon.addEventListener("mouseenter", function () {
        gsap.to(playBtn, {
            scale: 1,
            opacity: 1,
        })
    })

    videocon.addEventListener("mouseleave", function () {
        gsap.to(playBtn, {
            scale: 0,
            opacity: 0,
        })
    })

    videocon.addEventListener("mousemove", function (dets) {
        gasp.to(playBtn, {
            left: dets.x,
            left: dets.y,
        })
    })
}
videoConAnimation()

gsap.from("#page1 h1", {
    y: 100,
    delag: 0.5,
    duration: 1,
    stagger: 0.2,
    opacity: 0
})

gsap.from("#page1 #video-container", {
    scale:0.9,
    delag: 0.5,
    duration: 2.3,
    opacity: 0
})



