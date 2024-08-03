let getElem = (id) => document.getElementById(id);

function translateAboutMeENG() {
  getElem("TitleofAboutMeSite").innerText = "About me";
  getElem("MySkills").innerText = "My Skills";
  getElem("GeneralSkills").innerText = "General Skills";
  getElem("ProgramingLanguages").innerText = "My Programing Languages";
  getElem("MyProjects").innerText = "My Projects";
  getElem("MyNextPlans").innerText = "My Next Plans";
}

function translateAboutMe() {
  switch (selectedLanguages) {
    case "ENG":
      translateAboutMeENG();
      break;
  }
}

translateAboutMe();
