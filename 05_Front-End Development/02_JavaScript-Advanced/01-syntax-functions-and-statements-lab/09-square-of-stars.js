function squareOfStars(size=5){
    let result = '';
    star = '* '
    for(let i=1; i <= size; i++) {
        current_row = star.repeat(size).trimEnd() + '\n'
        result +=  current_row
    }
    console.log(result);
}
