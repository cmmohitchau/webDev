interface Person{
    name : string;
    age : number;
    greet(phrase:string) : void;
}

class Employee implements Person{
    name : string;
    age : number;

    constructor(n : string , a : number) {
        this.name = n;
        this.age = a;
    }
    greet(phrase : string) {
        console.log(`${phrase} ${this.name}`);
        
    }
}

class Manager implements Person {
    name : string;
    age : number;

    constructor(n : string , a : number) {
        this.name = n;
        this.age = a;
        console.log("in manager class");
        
    }

    greet(phrase : string) {
        console.log(`${phrase} ${this.name}`);
        console.log(this.age);
        
    }
}

const e = new Employee("mohit" , 22);

e.greet("hi there");
console.log(e.age);



