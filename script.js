// console.log("Welcome to KANDARP");

// ===============================
// KANDARP Luxury Furniture
// ===============================

// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 700);

});

// ===============================
// Scroll Progress Bar
// ===============================

window.addEventListener("scroll", () => {

    const winScroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width =
        scrolled + "%";

});

// ===============================
// Navbar Background
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "#000";

        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.4)";

    } else {

        header.style.background = "transparent";

        header.style.boxShadow = "none";

    }

});

// ===============================
// Swiper Slider
// ===============================

const swiper = new Swiper(".projectSwiper", {

    loop: true,

    autoplay: {

        delay: 2500,

        disableOnInteraction: false,

    },

    speed: 1200,

    spaceBetween: 30,

    slidesPerView: 3,

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

    breakpoints: {

        320: {

            slidesPerView: 1,

        },

        768: {

            slidesPerView: 2,

        },

        1200: {

            slidesPerView: 3,

        },

    },

});

// ===============================
// AOS
// ===============================

AOS.init({

    duration: 1200,

    once: true,

});

// ===============================
// Hero Background Slider
// ===============================

const hero = document.querySelector(".hero");

const heroImages = [

    "images/hero1.jpg",

    "images/hero2.jpg",

    "images/hero3.jpg"

];

let heroIndex = 0;

setInterval(() => {

    heroIndex++;

    if (heroIndex >= heroImages.length) {

        heroIndex = 0;

    }

    hero.style.backgroundImage =
        `url(${heroImages[heroIndex]})`;

}, 5000);

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter-box h3");

const speed = 40;

counters.forEach(counter => {

    const animate = () => {

        const value = +counter.innerText.replace("+", "");

        const data = +counter.getAttribute("data-count") || value;

        const time = data / speed;

        let current = +counter.dataset.current || 0;

        current += Math.ceil(time);

        if (current < data) {

            counter.innerText = current + "+";

            counter.dataset.current = current;

            requestAnimationFrame(animate);

        } else {

            counter.innerText = data + "+";

        }

    }

    animate();

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

// ===============================
// Active Navbar
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Gallery Zoom
// ===============================

const galleryImages =
    document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";

        overlay.style.top = 0;

        overlay.style.left = 0;

        overlay.style.width = "100%";

        overlay.style.height = "100%";

        overlay.style.background = "rgba(0,0,0,.95)";

        overlay.style.display = "flex";

        overlay.style.alignItems = "center";

        overlay.style.justifyContent = "center";

        overlay.style.zIndex = "99999";

        const image = document.createElement("img");

        image.src = img.src;

        image.style.maxWidth = "85%";

        image.style.maxHeight = "85%";

        image.style.borderRadius = "15px";

        overlay.appendChild(image);

        overlay.onclick = () => overlay.remove();

        document.body.appendChild(overlay);

    });

});

// ===============================
// Scroll To Top
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===========================
// Mobile Menu
// ===========================

const menu = document.getElementById("menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function (e) {

    e.stopPropagation();

    menu.classList.toggle("active");

    menuBtn.classList.toggle("active");

    if(menu.classList.contains("active")){
        document.body.style.overflow="hidden";
    }else{
        document.body.style.overflow="auto";
    }

});

// Close when clicking menu links
document.querySelectorAll("#menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

        menuBtn.classList.remove("active");

        document.body.style.overflow="auto";

    });

});

// Close when clicking outside
document.addEventListener("click",(e)=>{

    if(
        !menu.contains(e.target)
        &&
        !menuBtn.contains(e.target)
    ){

        menu.classList.remove("active");

        menuBtn.classList.remove("active");

        document.body.style.overflow="auto";

    }

});

// ESC Key
document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        menu.classList.remove("active");

        menuBtn.classList.remove("active");

        document.body.style.overflow="auto";

    }

});

// const menuBtn=document.querySelector(".menu-btn");

// const menu=document.getElementById("menu");

// menuBtn.onclick=()=>{

// menu.classList.toggle("active");

// }