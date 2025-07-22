let currentLang = localStorage.getItem("selectedLang")

let aboutMeHeader = document.getElementById("about-me-header");
let whoimHeader = document.getElementById("who-im-header");
let whoimContent = document.getElementById("who-im-content");
let techstackHeader = document.getElementById("tech-stack-header");

let techstackCpp = document.getElementById("tech-stack-cpp");
let techStackQt = document.getElementById("tech-stack-qt");
let techstackVue = document.getElementById("tech-stack-vue");
let techstackBasicWebstack = document.getElementById("tech-stack-basicwebstack");
let returnAboutMeButton = document.getElementById("return-about-me-button");

if(currentLang === "pl"){
    changeAboutMePagetoPL();
}

function changeAboutMePagetoPL(){
    aboutMeHeader.innerText = "O mnie";
    whoimHeader.innerText = "Kim jestem";
    whoimContent.innerText = "Jestem uczniem pierwszego roku informatyki. Interesuję się niskopoziomowymi aspektami IT i programowaniem niskopoziomowym. Interesują mnie aspekty cyberbezpieczeństwa, a szczególnie wiedza z zakresu red teamu.";
    techstackHeader.innerText = "Mój Tech Stack";

    techstackCpp.innerText = "C++ na poziomie średnio zaawansowanym";
    techStackQt.innerText = "Qt na poziomie początkującym";
    techstackVue.innerText = "Vue na poziomie początkującym";
    techstackBasicWebstack.innerText = "HTML, CSS i JS na poziomie początkującym";

    returnAboutMeButton.innerText = "Wróć na główna stronę";
}