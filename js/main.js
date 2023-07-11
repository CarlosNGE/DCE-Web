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
    let servicesMenu = document.querySelector(".sub");

    servicesArrow.addEventListener("click", ()=>{
        navLinks.classList.toggle("show1");
    });

    servicesMenu.addEventListener("click", ()=>{
        navLinks.classList.toggle("show1");
    });

// scroll timeline 

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden, .hiddenr');
    hiddenElements.forEach((el) => observer.observe(el));

}

