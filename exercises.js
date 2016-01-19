function Vehicle() {
  if (!(this instanceof Vehicle)) {
    return new Vehicle();
  }
  return this;
}

Vehicle.prototype = {
  doors: 4,
  wheels: 4
};

var sedan = Vehicle();
var coupe = Vehicle();

coupe.doors = 2;

console.log(sedan.hasOwnProperty('doors'));
console.log(coupe.hasOwnProperty('doors'));

function Coupe() {
  if (!(this instanceof Coupe)) {
    return new Coupe();
  }
  return this;
}

Coupe.prototype = Vehicle();
Coupe.prototype.doors = 2;

var crx = Coupe();

function Motorcycle() {
  if (!(this instanceof Motorcycle)) {
    return new Motorcycle();
  }
  return this;
}

Motorcycle.prototype = Vehicle();
Motorcycle.prototype.doors = 0;
Motorcycle.prototype.wheels = 2;

var harley = Motorcycle();

function Sedan() {
}

Sedan.prototype = Object.create(Vehicle.prototype);

var lesabre = new Sedan();
