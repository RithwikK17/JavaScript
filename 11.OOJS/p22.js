// static method 

/* 
    1. Declare the static method inside the class body using 'static' keyword
    2. static methods can't call it by using instance or ref
    3. static methods can be called by class name 
    4. 'this' pointer is global inside static methods
*/

class Car{
    constructor(title,company,type,color){
        this.title = title
        this.company = company
        this.type = type 
        this.color = color
    }

    getCarName(){
        document.writeln(`car name is ${this.title}`) 
    }

    getCarColor(){
        document.writeln(`color is${this.color}`) 
    }
}

let x = new Car("thar","mahindra","suv","red")

document.writeln(`<h3>${x.getCarName()}</h3>`)

Car.getCarColor()