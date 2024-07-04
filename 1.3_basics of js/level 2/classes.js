class Animal {
    constructor(name , legCount , speaks)
    {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    // static method is associated with the class not with the objects

    static myType()
    {
        console.log("Animal");
    }
    speak()
    {
        console.log("hi there " + this.speaks);
    }
}

let dog = new Animal("dog" , 4 , "bhow bhow");
let cat = new Animal("cat" , 4 , "meow meow");

Animal.myType();
dog.speak();
