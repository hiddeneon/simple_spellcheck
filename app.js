document.getElementById('checkButton').addEventListener('click', checkSpelling);

function checkSpelling() {
    const wordInput = document.getElementById('wordInput').value;
    const suggestionElement = document.getElementById('suggestion');

    if (!wordInput) {
        suggestionElement.textContent = "Пожалуйста, введите слово.";
        return;
    }

    const apiUrl = `https://speller.yandex.net/services/spellservice.json/checkText?text=${encodeURIComponent(wordInput)}&lang=ru`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                suggestionElement.textContent = `Слово "${wordInput}" написано правильно.`;
            } else {
                const suggestions = data[0].s.map(suggestion => `"${suggestion}"`).join(", ");
                suggestionElement.textContent = `Возможно вы имели ввиду: ${suggestions}?`;
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            suggestionElement.textContent = "Произошла ошибка при проверке орфографии.";
        });
}