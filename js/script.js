document.querySelector('.navbar-toggler').addEventListener("click", () => {
    document.querySelector('.navbar>ul').classList.toggle("show");
});

document.querySelector('#scrollToTop').addEventListener("click", () => window.scroll({ top: 0, behavior: "smooth" }));