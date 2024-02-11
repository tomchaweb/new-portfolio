const getIntouchButton = document.querySelector("#get-in-touch-btn");
const footerText = document.querySelector("#footer-text");

function SendMail() {
  const link = "mailto:tom.chapman97@btinternet.com";
  window.location.href = link;
}
getIntouchButton.addEventListener("click", SendMail);

const d = new Date();
let year = d.getFullYear();
footerText.textContent = `© Tom Chapman ${year}. All rights reserved.`;
