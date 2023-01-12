function greatestCommonDivisior(first, second){
    for (i=9; i > 0; i--){
        if (first % i == 0 && second % i ==0){
            console.log(i);
            break
        }

    }
}