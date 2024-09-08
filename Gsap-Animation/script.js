//  Practice Paper 1 Basic
// gsap.to(".box1",{
//     duration: 3,
//     delay:1.4,
//     x: 400,
//     rotate:360,
//     backgroundColor: "green",
//     borderRadius:"50",
//     yoyo:true, // use for make reverse animation
//     repeat:-1,
//     scale:2
// })

// gsap.from(".box2",{
//     duration: 3,
//     delay:1.4,
//     x: 400,
//     rotate:360,
//     backgroundColor: "orange",
//     repeat:-1,
//     yoyo:true,
//     scale:2
// })

// Practice Paper 2 Scroll Trigger
//Part 1
// gsap.from("#box1",{
//     scale:0,
//     delay:1,
//     rotate:720,
//     duration:4,

// })

// gsap.from("#page2 h2",{
//    scale:0,
//    duration:2,
//    rotate:360,
//    scrollTrigger: {
//     trigger:"#page2 h2",
//     scroller:"body",
//     markers: true,
//     start: "top 80%",

//    }
// })
// gsap.from("#page2 p",{
//    opacity:0,
//    duration:2,
//    x:700,
//    scrollTrigger: {
//     trigger:"#page2 p",
//     scroller:"body",
//     markers: true,
//     start: "top 80%",

//    }
// })

//Part 2
//gsap.to("#page2 h2", {
//   transform: "translateX(-100%)",
//   scrollTrigger: {
//     trigger: "#page2",
//     scroller: "body",
//     start: "top 0%",
//     end: "top -100%", //jitna jyada hoga utna time lagega(150,200)
//     scrub: 1,
//     pin: true,
//   },
// });



// Pactice Paper3 SVG path mdn (guitar string)

// var path = `M 10 100 Q 250 100 990 100 `
// var Finalpath = `M 10 100 Q 250 100 990 100 ` 

// var str = document.querySelector("#string");
// str.addEventListener("mousemove",function(dets){
//    path =  `M 10 100 Q ${dets.x} ${dets.y} 990 100`
//    gsap.to("svg path",{
//       attr:{d:path},
//       duration:0.5,
//       ease:"power3.out"
//    })
// })
// str.addEventListener("mouseleave",function(){
//    gsap.to("svg path",{
//       attr:{d:Finalpath},
//       duration:1.4,
//       ease:"elastic.out(1,0.3)"

//    })
// })



// Practice Paper 4 Cursor animation
// var crsr = document.querySelector("#cursor")
// var main = document.querySelector("#main")
// var imagediv = document.querySelector("#image")

// main.addEventListener("mousemove",function(dets){
//     gsap.to(crsr,{
//         x:dets.clientX,
//         y:dets.clientY, 
//         duration : 0.6,
//         ease: "back.out(1.9)",
//     })
// })

// imagediv.addEventListener("mousemove",function(){
//     crsr.innerHTML = "More Text"
//     gsap.to(crsr,{
//         scale:3,   
//     backgroundColor: "#ffffff8c"    
//     })
// })
// imagediv.addEventListener("mouseleave",function(){
//     crsr.innerHTML = ""
//     gsap.to(crsr,{
//         scale:1, 
//     backgroundColor: "#fff"
//     })
// })


// Practice Paper 5 Timeline
var menu = document.querySelector("#nav i")
var cross = document.querySelector("#blank i")
 var tl = gsap.timeline() 

 tl.to("#blank",{
    right:0,
    duration:0.3,
 })

 tl.from("#blank h2",{
    x:150,
    opacity:0,
    duration: 0.6,
    stagger:0.4
 })
 tl.from("#blank i",{
    opacity:0, 
 })
tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse()
 })
         
// Completed 5 Projects

