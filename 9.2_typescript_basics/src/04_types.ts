// Type alias User1
type User1 = {
    name: string;
    age: number;
}

// Unions
type greetArg = string | number;

function greet(id: greetArg) {
    console.log(id);
}

greet(1);
greet("22");

// Intersection
interface Employee {
    name: string;
    age: number;
    salary: number;
    greet(phrase : string) : void;
}

type TechLead = User1 & Employee;

const b: TechLead = {
    name: "Mohit",
    age: 22,
    salary: 22200,
    greet : (phrase : string) => {
        console.log(phrase);
        
    }
}

console.log(b.age , b.name , b.salary);
b.greet("hello")

