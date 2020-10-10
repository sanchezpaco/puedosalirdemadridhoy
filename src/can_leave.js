const noTexts = [
  "NO",
  "QUE NO COJONES",
  "NO!!",
  "NOOOOOOOOO",
  "MMMMMM, NO",
  "NO, INTENTELO DE NUEVO O MAS TARDE"
];

function addNoText() {
  const noDiv = document.getElementById("noText");
  noDiv.innerHTML = getRandomNo();
}

function getRandomNo() {
  rand = Math.floor(Math.random() * noTexts.length)
  return noTexts[rand]
}