var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// creator superclass that has product related code
// defines a factory method which separates object creation logic from business logic
var LogisticsApp = /** @class */ (function () {
    function LogisticsApp() {
    }
    // superclass's responsibility is to use concrete products (ie. business logic)
    // code for product creation should be separate from this class
    LogisticsApp.prototype.someOperation = function () {
        var product = this.createTransport();
        product.deliver();
    };
    return LogisticsApp;
}());
// concrete creators that are responsible for overriding the superclass's factory method
var TruckLogistics = /** @class */ (function (_super) {
    __extends(TruckLogistics, _super);
    function TruckLogistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TruckLogistics.prototype.createTransport = function () {
        return new Truck();
    };
    return TruckLogistics;
}(LogisticsApp));
var ShipLogistics = /** @class */ (function (_super) {
    __extends(ShipLogistics, _super);
    function ShipLogistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShipLogistics.prototype.createTransport = function () {
        return new Ship();
    };
    return ShipLogistics;
}(LogisticsApp));
var PlaneLogistics = /** @class */ (function (_super) {
    __extends(PlaneLogistics, _super);
    function PlaneLogistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlaneLogistics.prototype.createTransport = function () {
        return new Plane();
    };
    return PlaneLogistics;
}(LogisticsApp));
// concrete products are implementations of the common interface
// these are objects returned by factory method
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.deliver = function () {
        console.log("Truck delivers something");
    };
    return Truck;
}());
var Ship = /** @class */ (function () {
    function Ship() {
    }
    Ship.prototype.deliver = function () {
        console.log("Ship delivers something");
    };
    return Ship;
}());
var Plane = /** @class */ (function () {
    function Plane() {
    }
    Plane.prototype.deliver = function () {
        console.log("Plane delivers something");
    };
    return Plane;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.deliver = function () {
        console.log("Car delivers something");
    };
    return Car;
}());
// client code shouldn't be aware of Creator implementations
var clientCode = function (creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    creator.someOperation();
};
console.log('App: Launched with the TruckLogistics.');
clientCode(new TruckLogistics());
console.log('======================================');
console.log('App: Launched with the ShipLogistics.');
clientCode(new ShipLogistics());
