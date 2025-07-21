function languageChanged(event) {
  let selectedLanguage = event.target.value;
  const changeLangEvenet =
    new CustomEvent('languageChanged', { detail: selectedLanguage });

  const changeLangFunc = () => {
    localStorage.setItem('selectedLang', selectedLanguage)
    document.dispatchEvent(changeLangEvenet);
  };

  if (selectedLanguage === 'pl' &&
    selectedLanguage != localStorage.getItem('selectedLang')) {
    changeLangFunc();
  } else {
    changeLangFunc();
  }
}