let nav = document.querySelector("#nav");
let prevY = window.scrollY;

window.addEventListener("scroll", function(){
    if (prevY > window.scrollY) {
        nav.classList.remove("off");
        console.log("volviendo al top");
    } else {
        nav.classList.add("off");
        console.log("bajando");
    }

    if (window.scrollY > 500){
        nav.classList.add("bg-scroll");
    } else {
        nav.classList.remove("bg-scroll");
    }

    prevY = window.scrollY;
});