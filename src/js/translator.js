var selectedLanguages =
  localStorage.getItem("currentSelectedLanguages") || "PL";

function ChangeLanguage() {
  let selectedLanguage = document.getElementById("LanguageChoiceWidget").value;

  switch (selectedLanguage) {
    case "PL":
      selectedLanguages = "PL";
      localStorage.setItem("currentSelectedLanguages", selectedLanguages);
      translateIndex();
      break;
    case "ENG":
      selectedLanguages = "ENG";
      localStorage.setItem("currentSelectedLanguages", selectedLanguages);
      translateIndex();
      break;
  }
}
