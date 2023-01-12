function solve(sentence){
    const regex = /(\w+)/g;
    words = sentence.match(regex);
    let upperWords = []; 
    let leng = words.length - 1;
    for (i = 0; leng >= i; i++){
        word = words[i].toUpperCase()
        upperWords.push(word)
    }
    console.log(upperWords.join(', '));
}