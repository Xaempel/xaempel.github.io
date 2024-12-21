let getElem = (id) => document.getElementById(id);

function translateAboutMeENG() {
  getElem("TitleofAboutMeSite").innerText = "About me";
  getElem("MySkills").innerText = "My Skills";
  getElem("ProgramingLanguages").innerText = "My Programing Languages";
  getElem("my-projects").innerText = "My Projects";
  getElem("MyNextPlans").innerText = "My Next Plans";
  getElem("CppPoint").innerText = "C++ in beginning middle level";
  getElem("HtmlPoint").innerText = "Html in basic level";
  getElem("CssPoint").innerText = "Css in basic level";
  getElem("JsPoint").innerText = "Js in basic level";
  getElem("PythonPoint").innerText = "Python in basic level";
  translateProjectsDescription();
}

function translateProjectsDescription() {
  getElem("smart-work-plan").innerText =
    "It's intended to be an intelligent aid in creating a work plan for employees. Source for SmartWorkPlan is available on github";
  getElem("music-librarer").innerText =
    "MusicLibrarer: It's aims to help you experience music better in several ways, e.g. through the cataloging system, as well as through the built-in player and several other things.";
  getElem("ZSMessenger").innerText =
    "It's a communicator tailored specifically for the school I attend. I am running this project with 3 other people. When it is ready and made available to the world, I will update the description and provide a link to the project and the source if I manage to discuss this matter with my friends.";
}

function translateAboutMe() {
  switch (selectedLanguages) {
    case "ENG":
      translateAboutMeENG();
      break;
  }
}

translateAboutMe();
