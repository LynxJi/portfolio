
let cloud1 = document.getElementById('cloud1');
let cloud2= document.getElementById('cloud2');
let hand1 = document.getElementById('hand1');
let hand2 = document.getElementById('hand2');
let content = document.getElementById('content');
let tuong = document.getElementById('bg__about');
const see__more = document.getElementById('see__more');
const hide__off = document.getElementById('hide__off');
const content__about = document.querySelector('.content__about');
let me = document.getElementById('me');

// parallax scroll
window.addEventListener('scroll', function(){
    const number = window.scrollY;
    content.style.marginBottom = number * 2 + "px";
    hand1.style.bottom = number * 4 + "px";
    hand2.style.marginTop = number * 4 + "px";
    cloud1.style.right = number * 4 + "px";
    cloud2.style.left = number * 4 + "px";
});

see__more.addEventListener('click', function(){
    content__about.classList.add("active");
});
hide__off.addEventListener('click', function(){
    content__about.classList.remove("active");
});

// ----------------------------------------------------------------------------------------------------\

ScrollReveal().reveal('.image',{
    delay: 700,
    distance: "60px",
    reset: true,
    origin: "right",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('.introo',{
    delay: 750,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('.fullname',{
    delay: 900,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('.mssv',{
    delay: 1100,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#school',{
    delay: 1300,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('.des',{
    delay: 1500,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('.see__more',{
    delay: 1700,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('.title__seemore',{
    delay: 900,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('.year',{
    delay: 1100,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('.lorem',{
    delay: 1300,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#hide__off',{
    delay: 1500,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('.service__h1',{
    delay: 700,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('.service__h3',{
    delay: 900,
    distance: "60px",
    reset: true,
    origin: "right",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#item1',{
    delay: 1000,
    distance: "60px",
    reset: true,
    origin: "bottom",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#item2',{
    delay: 1200,
    distance: "60px",
    reset: true,
    origin: "bottom",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#item3',{
    delay: 1400,
    distance: "60px",
    reset: true,
    origin: "bottom",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});


ScrollReveal().reveal('#skill1',{
    delay: 800,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#skill2',{
    delay: 1000,
    distance: "60px",
    reset: true,
    origin: "right",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#skill3',{
    delay: 1200,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#skill4',{
    delay: 1400,
    distance: "60px",
    reset: true,
    origin: "right",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#skill5',{
    delay: 1400,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#skill6',{
    delay: 1200,
    distance: "60px",
    reset: true,
    origin: "right",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#skill7',{
    delay: 1000,
    distance: "60px",
    reset: true,
    origin: "left",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#skill8',{
    delay: 800,
    distance: "60px",
    reset: true,
    origin: "right",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});



ScrollReveal().reveal('#item__4',{
    delay: 1400,
    distance: "60px",
    reset: true,
    scale : "0.5",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#item__3',{
    delay: 1200,
    distance: "60px",
    reset: true,
    scale : "0.5",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#item__2',{
    delay: 1000,
    distance: "60px",
    reset: true,
    scale : "0.5",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
ScrollReveal().reveal('#item__1',{
    delay: 800,
    distance: "60px",
    reset: true,
    scale : "0.5",
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});
