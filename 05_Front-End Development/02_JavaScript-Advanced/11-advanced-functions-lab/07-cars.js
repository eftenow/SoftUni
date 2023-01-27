function solve(operations) {
    let cars = {};

    const operationsObj = {
        create: (name, inherit, parentName) => {cars[name] = inherit ? Object.create(cars[parentName]) : {}},

        set: (name, key, value) => cars[name][key] = value,
        print: name => {
            const entry = []
            for (const key in cars[name]) {
                entry.push(`${key}:${cars[name][key]}`)
            }
            console.log(entry.join(","))
        },
    }

    return JSON.stringify(operations.map(operation => {
        let [operationName, carName, key, value] = operation.split(' ');
        operationsObj[operationName](carName, key, value)
    }))

}



solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)