class Person {
    name: string;
    private age: number; //private propery of class set through the constructor.

    constructor(nm: string, age: number) {
        this.name = nm;
        this.age = age;
    }
    details() {
        // creates message using tepmplate string literals and expressions
        console.log(`Person named ${this.name} is of age ${this.age}`);
    }
}
//creates new instance of class Person through constructor.
let John = new Person("John Doe", 23);
//invokes the details method on the John instance.
John.details();