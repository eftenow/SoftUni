function solve(data){
    let carBrands = new Map;
    data.forEach(carInfo => {
        const [carBrand, carModel, producedCars] = carInfo.split(' | ');
        if (!carBrands.has(carBrand)){
            carBrands.set(carBrand, new Map());
        } 
        if (!carBrands.get(carBrand).has(carModel)){
            carBrands.get(carBrand).set(carModel, Number(producedCars));
        } else {
            let newCarsQuantity = carBrands.get(carBrand).get(carModel) + Number(producedCars);
            carBrands.get(carBrand).set(carModel, newCarsQuantity);
        }

    });
    carBrands.forEach((brandData, brandName) => {
        console.log(brandName);
        brandData.forEach((quantity, model) => {
            console.log(`###${model} -> ${quantity}`);
        });
    });
}

 solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])