function roadRadar(speed, zone){
    let speedLimit = 0;
    if (zone == 'residential'){
        speedLimit = 20
    }else if (zone == 'city'){
        speedLimit = 50
    }else if (zone == 'interstate'){
        speedLimit = 90
    }else if (zone == 'motorway'){
        speedLimit = 130
    }

    let difference = speed - speedLimit;
    let status = '';
    
    if (difference > 0 && difference <= 20){
        status = 'speeding';
    }else if (difference > 20 && difference <= 40){
        status = 'excessive speeding';
    }else if (difference > 40) {
        status = 'reckless driving';
    }

    if (!status){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }else{
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}