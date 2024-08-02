let getElem = (id) => document.getElementById(id);

function translateIndextoPL() {
  let articlesButton = getElem("ArticlesButton");
  let aboutMe = getElem("AboutMe");
  let selectLanguage = getElem("SelectLanguage");
  let polishOption = getElem("PolishOption");
  let englishOptionHook = getElem("EnglishOption");
  let changeLanguage = getElem("ChangeLanguage");

  articlesButton.innerText = "Artykuły";
  aboutMe.innerText = "O Mnie";
  selectLanguage.innerText = "Wybierz Język";
  polishOption.innerText = "Polski";
  englishOptionHook.innerText = "Angielski";
  changeLanguage.innerHTML = "Zmień Język";
}

function translateIndextoENG() {
  let articlesButton = getElem("ArticlesButton");
  let aboutMe = getElem("AboutMe");
  let selectLanguage = getElem("SelectLanguage");
  let polishOption = getElem("PolishOption");
  let englishOptionHook = getElem("EnglishOption");
  let changeLanguage = getElem("ChangeLanguage");

  articlesButton.innerText = "Aricles";
  aboutMe.innerText = "About me";
  selectLanguage.innerText = "Select Language";
  polishOption.innerText = "Polish";
  englishOptionHook.innerText = "English";
  changeLanguage.innerHTML = "Change Language";
}

function translateIndex() {
  switch (selectedLanguages) {
    case "PL":
      translateIndextoPL();
      break;
    case "ENG":
      translateIndextoENG();
      break;
  }
}
