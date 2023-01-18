function editElement() {
    let pattern = new RegExp(match, 'g');
    htmlRef.textContent = htmlRef.textContent.replace(pattern, replacer);
}