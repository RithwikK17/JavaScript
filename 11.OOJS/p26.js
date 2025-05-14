// class inheritance 

class Course{
    constructor(){
        this.title = "react"
        this.duration = 2
    }

    getCourseInfo(){
        document.writeln(`<h3>course title ${this.title} and the duration is ${this.duration} months</h3>`)
    }
}

class Person extends Course{
    constructor(){
        super()
        this.name = "John"
    }

    getPerson(){
        document.writeln(`<h3>User name ${this.name}</h3>`)
    }
}

let p1 = new Person()
p1.getPerson()
p1.getCourseInfo()