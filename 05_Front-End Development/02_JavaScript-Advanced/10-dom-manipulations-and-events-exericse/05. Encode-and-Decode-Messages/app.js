function encodeAndDecodeMessages() {
    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    const encodeBtn = buttons[0].addEventListener('click', encodeOnClick);
    const decodeBtn = buttons[1].addEventListener('click', decodeOnClick);

    function encodeOnClick(ev) {
        const textToEncode = textareas[0].value;
        let decodedText = '';

        for (const letter of textToEncode) {
            decodedText += String.fromCharCode(letter.charCodeAt(0) + 1);
        }
        textareas[1].value = decodedText; 
        textareas[0].value = '';
    }

    function decodeOnClick(ev) {
        const textToDecode = textareas[1].value;
        let encodedText = '';

        for (const letter of textToDecode) {
            encodedText += String.fromCharCode(letter.charCodeAt(0) - 1);
        }
        textareas[1].value = encodedText;
    }

}   