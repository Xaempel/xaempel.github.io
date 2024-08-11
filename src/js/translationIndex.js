let getElem = (id) => document.getElementById(id);

function translateIndextoPL() {
  getElem('ArticlesButton').innerText = 'Artykuły';
  getElem('AboutMe').innerText = 'O Mnie';
  getElem('SelectLanguage').innerText = 'Wybierz Język';
  getElem('PolishOption').innerText = 'Polski';
  getElem('EnglishOption').innerText = 'Angielski';
  getElem('ChangeLanguage').innerText = 'Zmień Język';
  getElem('LatestArticlesHeader').innerText = 'Najnowsze Artykuły';
}

function translateIndextoENG() {
  getElem('ArticlesButton').innerText = 'Aricles';
  getElem('AboutMe').innerText = 'About me';
  getElem('SelectLanguage').innerText = 'Select Language';
  getElem('PolishOption').innerText = 'Polish';
  getElem('EnglishOption').innerText = 'English';
  getElem('ChangeLanguage').innerText = 'Change Language';
  getElem('LatestArticlesHeader').innerText = 'Latest Articles';
}

function translateIndex() {
  switch (selectedLanguages) {
    case 'PL':
      translateIndextoPL();
      break;
    case 'ENG':
      translateIndextoENG();
      break;
  }
}
