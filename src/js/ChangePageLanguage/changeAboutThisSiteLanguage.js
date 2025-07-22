let currentLang = localStorage.getItem("selectedLang");

let siteHeader = document.getElementById("about-this-site-header");

let mainSiteGoals = document.getElementById("main-site-goals");

let firstGoalHeader = document.getElementById("first-goal-header");
let secondGoalHeader = document.getElementById("second-goal-header");
let thirtdGoalHeader = document.getElementById("thirtd-goal-header");

let firstGoalText = document.getElementById("first-goal-text");
let secondGoalText = document.getElementById("second-goal-text");
let thirtdGoalText = document.getElementById("thirtd-goal-text");

function changeAboutThisSitetoPL() {
    siteHeader.innerText = "O tej stronie";
    mainSiteGoals.innerText = "Główne cele tej witryny";

    firstGoalHeader.innerText = "Chcę powtórzyć to, czego się wcześniej nauczyłem";
    secondGoalHeader.innerText = "Chcę poprawić swój angielski poprzez praktykę";
    thirtdGoalHeader.innerText = "Te stronę traktuje jako moje CV";

    firstGoalText.innerText = "Będę pisać o tematach, które już wcześniej omawiałem, aby odświeżyć swoją wiedzę. Mogę popełniać drobne błędy, takie jak literówki lub czasami źle wyjaśniać pewne rzeczy więc, miej to na uwadze.";
    secondGoalText.innerText = "Chcę poprawić swój angielski poprzez praktykę i myślę, że pisanie bloga o moich zainteresowaniach to najlepszy sposób, żeby to zrobić.";
    thirtdGoalText.innerText = "Na tej stronie mogę pokazać, czego się nauczyłem i czego aktualnie się uczę, więc to dobry sposób na zaprezentowanie siebie. Mogę też zaprezentować swoje projekty.";
}

if (currentLang === "pl") {
    changeAboutThisSitetoPL();
}