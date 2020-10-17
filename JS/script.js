// Resize Function
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        document.querySelector(".nav-mobile").style.transition = "0s";
        hideNavMenu();
        navMenu.setAttribute("shown", "false");
        setTimeout(() => {
            document.querySelector(".nav-mobile").style.transition = "0.5s";
        }, 500);
    }
});


// Navbar

const showNavMenu = () => {
    navMenu.classList.add("nav-mobile-active");
    document.querySelector(".hamburger .line2").style.visibility = "hidden";
    document.querySelector(".hamburger .line1").style.transform = "rotate(45deg) translate(10px, 6px)";
    document.querySelector(".hamburger .line3").style.transform = "rotate(-45deg) translate(7px, -3px)";
    document.querySelector(".black-layout").classList.add("black-layout-active");
}

const hideNavMenu = () => {
    navMenu.classList.remove("nav-mobile-active");
    document.querySelector(".hamburger .line2").style.visibility = "visible";
    document.querySelector(".hamburger .line1").style.transform = "rotate(0deg) translate(0px, 0px)";
    document.querySelector(".hamburger .line3").style.transform = "rotate(0deg) translate(0px, 0px)";
    document.querySelector(".black-layout").classList.remove("black-layout-active");
}

document.querySelector(".black-layout").addEventListener('click', () => {
    hideNavMenu();
    navMenu.setAttribute("shown", "false");
})

let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-mobile");
hamburger.addEventListener('click', () => {
    if (navMenu.getAttribute("shown") === "false") {
        showNavMenu();
        navMenu.setAttribute("shown", "true");
    } else {
        hideNavMenu();
        navMenu.setAttribute("shown", "false");
    }
})

