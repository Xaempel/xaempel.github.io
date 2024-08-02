var selectedLanguages = "PL";

function ChangeLanguage() {
  let selectedLanguage = document.getElementById("LanguageChoiceWidget").value;

  switch (selectedLanguage) {
    case "PL":
      selectedLanguages = "PL";
      translateIndex();
      break;
    case "ENG":
      selectedLanguages = "ENG";
      translateIndex();
      break;
  }
}
