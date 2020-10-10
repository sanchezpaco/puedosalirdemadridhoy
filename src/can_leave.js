const noTexts = [
  "NO",
  "QUE NO COJONES",
  "NO!!",
  "NOOOOOOOOO",
  "MMMMMM, NO",
  "NO, INTENTELO DE NUEVO O MAS TARDE",
  "QUE NO!",
  "JODER, QUE NO!",
  "AUN NO",
  "AHORA NO",
  "NOPE",
  "EN VALENCIA SI, AQUI NO",
  "CASI PERO NO",
  "SSSSSNO"
];

function addNoText() {
  const noDiv = document.getElementById("noText");
  noDiv.innerHTML = getRandomNo();
}

function getRandomNo() {
  rand = Math.floor(Math.random() * noTexts.length)
  return noTexts[rand]
}