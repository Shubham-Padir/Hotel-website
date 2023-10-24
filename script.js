var tl = gsap.timeline()


tl.from("#nav ",{
    y:-80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.3,
    scrub:0,
    
})

tl.from("#ct, #cl, #cr",{
    x:-80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    rotate: 360
})

tl.from("#heading, h1",{
    scale:0,
    y:-100,
    opacity:0,
    duration:0.8,
    delay:0.5,
    scrub:2
})

tl.from("#jointbtn, button",{
    scale:1,
    x:-100,
    opacity:0,
    duration:0.8,
    delay:0.5,
    scrub:2
})

var a = document.querySelector("#btn1")
var b = document.querySelector("#jointbtn, #join")
var c = document.querySelector("#btn2")
var d = document.querySelector("h1")

a.addEventListener("mousemove",function(){
    a.style.backgroundColor = "purple"
    a.style.color = "white"
})


a.addEventListener("mouseleave",function(){
    a.style.backgroundColor = "transparent"
    a.style.color = "black"
    a.style.transition =  "all ease 0.5s"
})

b.addEventListener("mousemove",function(){
    b.style.backgroundColor = "purple"
    b.style.color = "white"
})


b.addEventListener("mouseleave",function(){
    b.style.backgroundColor = "transparent"
    b.style.color = "black"
    b.style.transition =  "all ease 0.5s"
})


c.addEventListener("mousemove",function(){
    c.style.backgroundColor = "purple"
    c.style.color = "white"
})


c.addEventListener("mouseleave",function(){
    c.style.backgroundColor = "transparent"
    c.style.color = "black"
    c.style.transition =  "all ease 0.5s"
})

d.addEventListener("mousemove",function(){
    d.innerHTML = "BE THE PRIME MEMBER"
    d.style.color = "purple"
})


d.addEventListener("mouseleave",function(){
    d.innerHTML = "JOIN THE CLUB"
    d.style.color = "black"
})
