function extractText() {
    let extractedText = document.querySelectorAll('#items li');
    let textareaElement = document.getElementById('result');
    for (const line of extractedText) {
        textareaElement.textContent += line.textContent + '\n';
    }
}