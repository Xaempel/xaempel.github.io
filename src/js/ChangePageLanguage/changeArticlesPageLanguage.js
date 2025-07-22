let currentLang = localStorage.getItem("selectedLang");

let articlesHeader = document.getElementById("articles-header");
let returnButton = document.getElementById("return-articles-button");

if(currentLang === "pl"){
    changeArticlesPageToPL();
}

function changeArticlesPageToPL(){
    articlesHeader.innerText = "Artykuły";
    returnButton.innerText = "Wróć na główna stronę";
}