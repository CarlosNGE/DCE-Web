document.addEventListener("DOMContentLoaded", init);

function init() {

    // sidebar open close
    let menuOpenBtn = document.querySelector(".navbar .bx-menu");
    let closeOpenBtn = document.querySelector(".nav-links .bx-x");
    let navLinks = document.querySelector(".nav-links");

    menuOpenBtn.addEventListener("click", ()=>{
        navLinks.style.right="0";
    });

    closeOpenBtn.addEventListener("click", ()=>{
        navLinks.style.right="-100%";
    });


    // sidebar sub menu open close

    let servicesArrow = document.querySelector(".services-arrow");

    servicesArrow.addEventListener("click", ()=>{
        navLinks.classList.toggle("show1");
    });

}