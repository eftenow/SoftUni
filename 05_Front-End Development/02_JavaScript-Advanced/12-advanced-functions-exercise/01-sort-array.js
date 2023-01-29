function solve(arr, order){
    return (arr.sort((a, b) => order == 'asc' ? a - b : b - a)); 
}

solve([14, 7, 17, 6, 8], 'asc');