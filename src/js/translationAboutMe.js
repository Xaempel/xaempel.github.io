let getElem = (id) => document.getElementById(id);

function translateAboutMeENG() {
  getElem('TitleofAboutMeSite').innerText = 'About me';
  getElem('MySkills').innerText = 'My Skills';
  getElem('ProgramingLanguages').innerText = 'My Programing Languages';
  getElem('MyProjects').innerText = 'My Projects';
  getElem('MyNextPlans').innerText = 'My Next Plans';
  getElem('CppPoint').innerText = 'C++ in beginning middle level';
  getElem('HtmlPoint').innerText = 'Html in basic level';
  getElem('CssPoint').innerText = 'Css in basic level';
  getElem('JsPoint').innerText = 'Js in basic level';
  getElem('PythonPoint').innerText = 'Python in basic level';
}

function translateAboutMe() {
  switch (selectedLanguages) {
    case 'ENG':
      translateAboutMeENG();
      break;
  }
}

translateAboutMe();
