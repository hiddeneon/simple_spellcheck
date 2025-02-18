const checkSpelling = require("./spellcheck");

document.getElementById("checkButton").addEventListener("click", () => {
  const inputText = document.getElementById("inputText").value;
  const mistakes = checkSpelling(inputText);

  let outputHTML = inputText;

  mistakes.reverse().forEach(mistake => {
    const { word, index } = mistake;
    const regex = new RegExp(`\\b${word}\\b`, 'g');
    outputHTML = outputHTML.replace(regex, `<span class="highlight">${word}</span>`);
  });

  document.getElementById("output").innerHTML = outputHTML;
});