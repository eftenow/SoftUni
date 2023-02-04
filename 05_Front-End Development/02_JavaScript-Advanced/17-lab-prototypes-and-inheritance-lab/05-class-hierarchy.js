function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }
        get area() {
            return
        }
        changeUnits(newUnits) {
            this.units = newUnits;
        }
        toString(){
            return `Figures units: ${this.units} `
        }
        transformUnits(amount){
            switch (this.units) {
                case 'mm': amount *= 10; break;
                case 'm': amount /= 10; break;
            }
            return amount;
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units)
            this._radius = radius;
        }

        get radius(){
            return this.transformUnits(this._radius);
        }

        get area(){
            return Math.PI * this.radius * this.radius;
        }
        toString = () => super.toString() + `Area: ${this.area} - radius: ${this.radius}`;
    }

    class Rectangle extends Figure{
        constructor(width, height, units){
            super(units);
            this._width = width;
            this._height = height;
        }
        get width(){
            return this.transformUnits(this._width)
        }
        get height(){
            return this.transformUnits(this._height)
        }
        get area(){
            return this.width * this.height;
        }
        toString = () => super.toString() + `Area: ${this.area} - width: ${this.width}, height: ${this.height}`
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}
