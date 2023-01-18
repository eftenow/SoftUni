function extract(content) {
    let textElement = document.getElementById('content');

    let pattern = /\((\w+( \w+)*)\)/g;
    let matches = textElement.textContent.matchAll(pattern);
    let locations = [];

    for (const match of matches) {
        locations.push(match[1]);
    }
    return locations.join(';');
}