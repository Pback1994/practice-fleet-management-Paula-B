// Task #1 - Define Vehicle Class

class vehicle {
  constructor(type, make, model, year, mileage = 0) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }

  // Task #2 - Add Methods

  drive(distance) {
    return (this.mileage = distance + this.mileage);
  }

  getDetails() {
    return `This ${this.type} vehicle is a ${this.make} ${this.model} and was built in ${this.year}. Currently, it has ${this.mileage} miles.`;
  }
}

// Task #3 - Creating and Using Vehicle Objects

let truck = new vehicle("truck", "Toyota", "Tundra", 1987, 15000);
let coop = new vehicle("coop", "Honda", "Civic", 2009, 9000);
let motorcycle = new vehicle("motorcycle", "Honda", "Cruiser", 2025, 1200);

console.log(truck.drive(15));
console.log(coop.drive(1450));
console.log(motorcycle.drive(2000));

console.log(truck.getDetails());
console.log(coop.getDetails());
console.log(motorcycle.getDetails());
