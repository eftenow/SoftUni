function solve(townsInfo){
    let towns = [];
    
    for (let i = 1; i < townsInfo.length; i++){
        const element = townsInfo[i].split('|').filter(n => n);
        let [Town, Latitude, Longitude] = element;
        Town = Town.trim()
        Latitude = Number(Latitude.trim())
        Longitude = Number(Longitude.trim())
        towns.push({
            Town: Town,
            Latitude: Number(Latitude.toFixed(2)),
            Longitude: Number(Longitude.toFixed(2)),
        })
    }
    return JSON.stringify(towns)
}


console.log(solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']));

