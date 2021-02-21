
// common interface that all products implement
// abstract type that factory methods return
interface ITransport {
    deliver(): void
}

// creator superclass that has product related code
// defines a factory method which separates object creation logic from business logic
class LogisticsApp {

    public createTransport(): ITransport {
        return new Car();
    }
}

// concrete creators that are responsible for overriding the superclass's factory method
class TruckLogistics extends LogisticsApp {}

class ShipLogistics extends LogisticsApp {}

class PlaneLogistics extends LogisticsApp {}

// concrete products are implementations of the common interface
// these are objects returned by factory method
class Truck implements ITransport {

    deliver() {}
}

class Ship implements ITransport {

    deliver() {}
}

class Plane implements ITransport {

    deliver() {}
}

// default product returned in the superclass's factory method
class Car implements ITransport {

    deliver() {}
}
