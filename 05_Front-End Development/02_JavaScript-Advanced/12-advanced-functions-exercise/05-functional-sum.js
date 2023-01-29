function add(num){
    let sum = 0;

    function addMore(number){
        sum += number;

        return addMore
    }

    addMore.toString = () => {
        return sum;
    }  

    return addMore(num);
}

console.log(add(1)(6)(-3).toString());