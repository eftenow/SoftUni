function solve(arr){
    let calorieObject = {};

    for (let i = 0; i < arr.length; i += 2) {
        const food = arr[i];
        const calories = Number(arr[i+1]);
        calorieObject[food] = calories;
    }
    console.log(calorieObject);
};


solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])