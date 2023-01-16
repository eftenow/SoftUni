function solve(cityInfo) {
    let output = {}
    for (const data of cityInfo) {
        let [cityName, cityPopulation] = data.split(' <-> ');
        cityPopulation = Number(cityPopulation);
        if (!output[cityName]) {
            output[cityName] = 0;
        }
        output[cityName] += cityPopulation;
    }
    for (const key in output) {
        console.log(`${key} : ${output[key]}`);
    }
}


solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)