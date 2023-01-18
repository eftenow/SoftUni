function colorize() {
    let dataElements = document.querySelectorAll('table tr:nth-child(even)');
    for (const el of dataElements) {
        el.style.backgroundColor = "teal";
    }

    
}