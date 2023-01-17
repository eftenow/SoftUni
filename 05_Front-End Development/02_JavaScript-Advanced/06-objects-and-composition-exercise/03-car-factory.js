function solve(order) {
    let engine;
    if (order.power <= 90) {
        engine = { power: 90, volume: 1800 }
    } else if (order.power <= 120) {
        engine = { power: 120, volume: 2400 }
    } else if (order.power <= 200) {
        engine = { power: 200, volume: 3500 }
    };
    if (order.wheelsize % 2 == 0){
        order.wheelsize -= 1
    };
    let wheels = []
    wheels.length = 4;
    wheels.fill(order.wheelsize)


    coupes = {
        hatchback: { type: 'hatchback', color: '' },
        coupe: { type: 'coupe', color: '' },
    }
    let car = {
        model: order.model,
        engine,
        carriage : {type: order.carriage, color: order.color},
        wheels,
    }
    return car;

}


console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));