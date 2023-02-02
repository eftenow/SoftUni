class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance = (firstPoint, secondPoint) =>{
        let result =  (secondPoint.x - firstPoint.x) ** 2 + (secondPoint.y - firstPoint.y) ** 2;
        return Math.sqrt(result);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));