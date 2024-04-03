const header = document.querySelector("header")

window.addEventListener("scroll", function(){
    header.classList.toggle("blur-line", window.scrollY > 60)
});

let menu = document.querySelector("#menu-icon")
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}

let buttonAnimation = () => {
    const timelMessageButton = gsap.timeline({ defaults: { duration: .1 }, repeat: -5, repeatDelay: 3 });
    timelMessageButton.to('.button', {rotate: 35})
      .to('.button', {rotate: -35})
      .to('.button', {rotate: 35})
      .to('.button', {rotate: 0});
    return timelMessageButton;
}

const timel = gsap.timeline({defaults: { duration: 1} });
timel.from('.message-banner', {opacity: 3, y: 40})
     .from('.message-description', {opacity: 3, y: 50})
     .add(buttonAnimation);
;


