let discordAccount = document.getElementById("discord-logo");
let youtubeAccount = document.getElementById("youtube-logo");
let linktreeAccount = document.getElementById("linktree-logo");
let githubAccount = document.getElementById("github-logo");
let languageCPlusPlus = document.getElementById("c_plus_plus-logo");
let languagePython = document.getElementById("python-logo");
let languageJava = document.getElementById("java-logo");
let languageHTML = document.getElementById("html-logo");
let languageCSS = document.getElementById("css-logo");
let languageJS = document.getElementById("js-logo");

function openDiscord() {
    window.alert("Discord Server (Code AsG) - Coming Soon!")
}

function openYouTube() {
    window.open("https://www.youtube.com/@asgirn520", "_blank");
}

function openLinktree() {
    window.open("https://linktr.ee/asgirn520", "_blank");
}

function openGitHub() {
    window.open("https://github.com/AsG520", "_blank");
}

function openCPlusPlus() {
    window.open("https://en.wikipedia.org/wiki/C%2B%2B", "_blank");
}

function openPython() {
    window.open("https://en.wikipedia.org/wiki/Python_(programming_language)", "_blank");
}

function openJava() {
    window.open("https://en.wikipedia.org/wiki/Java_(programming_language)", "_blank");
}

function openHTML() {
    window.open("https://en.wikipedia.org/wiki/HTML", "_blank");
}

function openCSS() {
    window.open("https://en.wikipedia.org/wiki/CSS", "_blank");
}

function openJS() {
    window.open("https://en.wikipedia.org/wiki/JavaScript", "_blank");
}

discordAccount.addEventListener("click", openDiscord);
youtubeAccount.addEventListener("click", openYouTube);
linktreeAccount.addEventListener("click", openLinktree)
githubAccount.addEventListener("click", openGitHub);
languageCPlusPlus.addEventListener("click", openCPlusPlus);
languagePython.addEventListener("click", openPython);
languageJava.addEventListener("click", openJava);
languageHTML.addEventListener("click", openHTML);
languageCSS.addEventListener("click", openCSS);
languageJS.addEventListener("click", openJS);