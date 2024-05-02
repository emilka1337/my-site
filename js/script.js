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
        "contain": "true",
        "wrapAround": "true",
        "autoPlay": "1500",
        "selectedAttraction": "0.005",
        "friction": "0.15"
    })
});