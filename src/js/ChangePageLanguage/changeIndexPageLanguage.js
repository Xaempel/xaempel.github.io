document.addEventListener('languageChanged', (event) => {
    if (event.detail == "pl") {
        changeLangtoPL();
    } else {
        changeLangtoEN();
    }
});

let articlesButton = document.getElementById("articles-button");
let aboutMeButton = document.getElementById("about-me-button");
let aboutThisSite = document.getElementById("about-this-site");
let ghAccountButton = document.getElementById("GHAccountButton");
let selectLanguageSummary = document.getElementById("select-language-summary");

function changeLangtoPL() {
    articlesButton.innerText = "Artykuły";
    aboutMeButton.innerText = "O mnie";
    aboutThisSite.innerText = "O tej stronie";
    ghAccountButton.innerText = "Moje konto Github";
    selectLanguageSummary.innerText = "Wybierz język";
}

function changeLangtoEN() {
    articlesButton.innerText = "Articles";
    aboutMeButton.innerText = "About me";
    aboutThisSite.innerText = "About this site";
    ghAccountButton.innerText = "My Github account";
    selectLanguageSummary.innerText = "Select your language";
}