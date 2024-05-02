document.querySelector('.navbar-toggler').addEventListener("click", () => {
    document.querySelector('.navbar>ul').classList.toggle("show");
});

document.querySelector('#scrollToTop').addEventListener("click", () => window.scroll({ top: 0, behavior: "smooth" }));

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector('.navbar>ul').classList.remove("show");
    });
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