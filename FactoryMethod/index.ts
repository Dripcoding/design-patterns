
// common interface that all products implement
// abstract type that factory methods return
interface ITransport {
    deliver(): void
}

// creator superclass that has product related code
// defines a factory method which separates object creation logic from business logic
class LogisticsApp {

    // superclass's responsibility is to use concrete products (ie. business logic)
    // code for product creation should be separate from this class

    public createTransport(): ITransport {
        return new Car();
    }
}

// concrete creators that are responsible for overriding the superclass's factory method
class TruckLogistics extends LogisticsApp {

    public createTransport(): ITransport {
        return new Truck();
    }
}

class ShipLogistics extends LogisticsApp {

    public createTransport(): ITransport {
        return new Ship();
    }
}

class PlaneLogistics extends LogisticsApp {

    public createTransport(): ITransport {
        return new Plane();
    }
}

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
