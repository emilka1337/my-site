const TRANSLATABLE_TEXT = document.querySelectorAll('.translatable-text');

document.querySelectorAll('.language-button').forEach(item => {
    item.addEventListener("click", function() {
        let selectedLang = this.dataset["lang"];
        localStorage.setItem("language", selectedLang);
        changeLanguage(selectedLang);
    });
});

function changeLanguage(selectedLang) {
    for (let index in TRANSLATABLE_TEXT) {
        TRANSLATABLE_TEXT[index].innerText = DICTIONARY[selectedLang][index];
    }
}

changeLanguage(localStorage.getItem("language") || "en");