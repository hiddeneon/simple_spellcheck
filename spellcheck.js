const Typo = require("typo-js");

const dictionary = new Typo("en_US");

function checkSpelling(text) {
  const words = text.split(/\s+/);
  const mistakes = [];

  words.forEach((word, index) => {
    if (!dictionary.check(word)) {
      mistakes.push({
        word,
        index,
      });
    }
  });

  return mistakes;
}

module.exports = checkSpelling;