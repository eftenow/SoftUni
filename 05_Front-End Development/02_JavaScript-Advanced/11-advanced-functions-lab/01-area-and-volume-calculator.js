function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};


function solve(area, vol, input) {
    return JSON.parse(input).map(figure => ({
        area: area.call(figure),
        volume: vol.call(figure),
    }))

}


console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`));