// Suppose we have a base class Bird and a subclass Penguin.

class Bird1 {
    fly(){}
}

class Kingfisher extends Bird1 {
    fly(): void {
        console.log('Kingfisher flying')
    }
}

class Penguin extends Bird1 {
    fly() {
        throw new Error(`Penguin can't fly`)
    }
}

function makeFly(bird: Bird1){
    bird.fly()
}

makeFly(new Kingfisher())
// makeFly(new Penguin()) // here is this breaking LSP
// Object of subclass should be able to access the all the methods and properties of the superclass.



// ------------------------------------------------------------------------

// Refactor the design to avoid violating LSP
abstract class Bird2 {
    abstract move(): void;
}

class Sparrow extends Bird2 {
    move(): void {
        console.log('Flying...')
    }
}

class Duck extends Bird2 {
    move(): void {
        console.log('Swimming...')
    }
}

function makeMove(bird: Bird2){
    bird.move()
}

makeMove(new Sparrow())
makeMove(new Duck())























export {}
