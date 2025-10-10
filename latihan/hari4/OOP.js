class bike {
    constructor(engine, brake, type) {
        this.engine = engine,
        this.brake = brake,
        this.type = type
    }
        describe() {
        return `Engine: ${this.engine.join(', ')}, Brakes: ${this.brake.join(', ')}, Types: ${this.type.join(', ')}`;
    }

}

var bikes =  new bike(["Yamaha"], ["Brembo"], ["XMAX"])
console.log(bikes.describe())



class sportCars {
    constructor(brands, types) {
        this.brands = brands;  
        this.types = types;    
    }

    describe() {
        return `Brands: ${this.brands.join(', ')}, Types: ${this.types.join(', ')}`;
    }
}


var cars = new sportCars(["Jaguar", "Porsche"], ["Racing", "Endurance"]);

console.log(cars.describe());
