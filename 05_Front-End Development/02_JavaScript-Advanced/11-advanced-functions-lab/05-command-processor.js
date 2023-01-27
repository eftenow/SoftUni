function solution(){
    let text = '';
    return{
        append: (string) => text += string,
        removeStart: (num) => text = text.substring(num),
        removeEnd: (num) => text = text.substring(0, text.length - num),
        print: () => console.log(text)
    }   

}


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();