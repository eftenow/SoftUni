function solution(initialNum){
   function add(firstNum, secondNum) {
        return firstNum + secondNum;
   }
   return add.bind(null, initialNum);
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));