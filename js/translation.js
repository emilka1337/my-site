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
        let element = TRANSLATABLE_TEXT[index]
        element.innerText = DICTIONARY[selectedLang][index];

        // element.innerText.length < 20 && animateHackerText(element);
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function animateHackerText(element) {
//     const INTERVAL = 100;
//     const word = element.innerText;

//     let symbols = ['#', '$', '@', '%', '&', '*', '!', '(', ')', '^'];
//     let counter = 1;

//     for (let interval = INTERVAL; interval <= word.length * INTERVAL; interval += INTERVAL) {
//         setTimeout(function () {
//             let chars = '';

//             for (let i = counter; i < word.length; i++) {
//                 chars += symbols[random(0, symbols.length - 1)]
//             }

//             element.innerText = word.substr(0, counter) + chars

//             counter++
//         }, interval)
//     }
// }

changeLanguage(localStorage.getItem("language") || DICTIONARY[navigator.language.substring(0, 2)] || "en");