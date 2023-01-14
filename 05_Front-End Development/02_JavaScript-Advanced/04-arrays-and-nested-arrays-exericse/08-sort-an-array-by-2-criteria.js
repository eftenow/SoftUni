function solve(elements){
    let sortedElements = elements.sort(function (a, b){
        let lenA = a.length;
        let lenB = b.length;
        if (lenA == lenB){
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }else{
            return lenA - lenB;
        }
    })
    console.log(sortedElements.join('\n'));
}   

solve(['test', 
'Deny', 
'omen', 
'Default'])