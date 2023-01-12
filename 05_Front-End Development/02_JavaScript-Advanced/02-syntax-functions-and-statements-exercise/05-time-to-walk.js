function timeToWalk(steps, footPrint, speed) {
    kmDistance = steps * footPrint / 1000
    breakTime = parseInt(kmDistance / 0.5) * 60
    secondsTotal = (kmDistance / speed * 60) * 60
    total = breakTime + secondsTotal

    hours = Math.floor(total / 3600);
    total %= 3600;
    minutes = Math.floor(total / 60);
    seconds = Math.round(total % 60);
    console.log(`${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`);


}