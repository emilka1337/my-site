let currentScroll = 0;

document.querySelector('.navbar-toggler').addEventListener("click", () => {
    document.querySelector('.navbar>ul').classList.toggle("show");
});

document.querySelector('#scrollToTop').addEventListener("click", () => window.scroll({ top: 0, behavior: "smooth" }));

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector('.navbar>ul').classList.remove("show");
    });
});

document.querySelector('.show-languages-button').addEventListener("focus", () => {
    document.querySelector('.languages-list').classList.add("show");
});

document.querySelector('.show-languages-button').addEventListener("blur", () => {
    setTimeout(function() {
        document.querySelector('.languages-list').classList.remove("show");
    }, 200);
});

window.addEventListener("scroll", () => {
    // Shows/hides header when scrolled up/down
    if (window.scrollY > currentScroll) {
        document.querySelector('header').classList.add("hidden");
    } else {
        document.querySelector('header').classList.remove("hidden");    
    }
    // Makes header transparent when scroll position is 0
    if (window.scrollY > 0) {
        document.querySelector('header').classList.add("non-transparent");
    } else {
        document.querySelector('header').classList.remove("non-transparent");
    }

    currentScroll = window.scrollY;
});

document.querySelectorAll('.project-carousel').forEach(elem => {
    new Flickity(elem, {
        "cellAlign": "left",
        "contain": true,
        "wrapAround": true,
        "autoPlay": 3000,
        "selectedAttraction": 0.005,
        "friction": 0.15,
        "imagesLoaded": true,
        "arrowShape": {
            x0: 10,
            x1: 60, y1: 50,
            x2: 65, y2: 45,
            x3: 20
        }
    })
});