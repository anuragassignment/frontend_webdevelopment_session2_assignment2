var Person = (function () {
    function Person(nm, age) {
        this.name = nm;
        this.age = age;
    }
    Person.prototype.details = function () {
        console.log("Person named " + this.name + " is of age " + this.age);
    };
    return Person;
}());
var John = new Person("John Doe", 23);
John.details();
//# sourceMappingURL=constructor.js.map