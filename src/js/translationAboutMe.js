let getElem = (id) => document.getElementById(id);

function translateAboutMePL() {
  console.log("test 1");
}

function translateAboutMeENG() {
  console.log("test 2");
}

function translateAboutMe() {
  console.log(selectedLanguages);
  switch (selectedLanguages) {
    case "PL":
      translateAboutMePL();
      break;
    case "ENG":
      translateAboutMeENG();
      break;
  }
}

translateAboutMe();
