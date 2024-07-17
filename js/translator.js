function ChangeLanguage() {
  let selectedLanguage = document.getElementById("LanguageChoiceWidget").value;

  switch (selectedLanguage) {
    case "PL":
      translateIndextoPL();
      break;
    case "ENG":
      translateIndextoENG();
      break;
  }
}
