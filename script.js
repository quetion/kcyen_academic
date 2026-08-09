const toggle = document.querySelector(".language-toggle");
const languageLabel = document.querySelector("[data-lang-label]");

function applyLanguage(language) {
  const isEnglish = language === "en";
  document.documentElement.lang = isEnglish ? "en" : "zh-Hant";
  document.querySelectorAll("[data-zh][data-en]").forEach((element) => {
    element.textContent = element.dataset[language];
  });
  document.querySelectorAll(".lang-zh").forEach((element) => {
    element.hidden = isEnglish;
  });
  document.querySelectorAll(".lang-en").forEach((element) => {
    element.hidden = !isEnglish;
  });
  languageLabel.textContent = isEnglish ? "中" : "EN";
  toggle.setAttribute("aria-label", isEnglish ? "切換至中文" : "Switch to English");
  localStorage.setItem("kcy-language", language);
}

toggle.addEventListener("click", () => {
  applyLanguage(document.documentElement.lang === "en" ? "zh" : "en");
});

applyLanguage(localStorage.getItem("kcy-language") === "en" ? "en" : "zh");
