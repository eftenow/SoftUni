function solve(numbersList){
    sortedList = numbersList.sort(function(a, b){
        return a-b;
    })
    let [one, two] = sortedList;
    console.log(one, two);
}