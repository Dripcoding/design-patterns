
// common interface that all products implement
// abstract type that factory methods return
interface ITransport {
    deliver(): void
}

// creator superclass that has product related code
// defines a factory method which separates object creation logic from business logic
abstract class LogisticsApp {

    // superclass's responsibility is to use concrete products (ie. business logic)
    // code for product creation should be separate from this class
    public someOperation(): void {
        const product = this.createTransport()
        product.deliver()
    }

   public abstract createTransport(): ITransport
}

// concrete creators that are responsible for overriding the superclass's factory method
class TruckLogistics extends LogisticsApp {

    public createTransport(): ITransport {
        return new Truck()
    }
}

class ShipLogistics extends LogisticsApp {

    public createTransport(): ITransport {
        return new Ship()
    }
}

class PlaneLogistics extends LogisticsApp {

    public createTransport(): ITransport {
        return new Plane()
    }
}

// concrete products are implementations of the common interface
// these are objects returned by factory method
class Truck implements ITransport {

    deliver(): void {
        console.log("Truck delivers something")
    }
}

class Ship implements ITransport {
    
    deliver(): void {
        console.log("Ship delivers something")
    }
}

class Plane implements ITransport {
    
    deliver(): void {
        console.log("Plane delivers something")
    }
}
class Car implements ITransport {

    deliver(): void {
        console.log("Car delivers something")
    }
}

// client code shouldn't be aware of Creator implementations
const clientCode = (creator: LogisticsApp): void => {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.')
    creator.someOperation()
}

console.log('App: Launched with the TruckLogistics.')
clientCode(new TruckLogistics())
console.log('======================================')

console.log('App: Launched with the ShipLogistics.')
clientCode(new ShipLogistics())