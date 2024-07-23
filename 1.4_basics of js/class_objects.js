const employee = {
    calcTax : () => {
        console.log("Tax rate is 10%");
    }
}

const karan = {
    salary : 29000 , 
    calcTax : () => {
        console.log("Tax rate is 30%");
    }
}

employee.calcTax()
karan.__proto__ = employee;

karan.calcTax();

class Car {  
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brand = brand;
    }

    getBrand() {
        return this.brand;
    }

}



let hyundai = new Car;

hyundai.start();
hyundai.stop();
console.log(typeof(hyundai));
console.log(typeof(Car));

let toyota = new Car;

toyota.setBrand("foutuner");

let b = toyota.getBrand();
console.log(b);
