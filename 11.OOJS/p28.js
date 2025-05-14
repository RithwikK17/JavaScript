// method overriding
class Course{
    constructor(ti){
        this.title = ti
    }

    getData(){
        return `course is ${this.title}`
    }
}

class Person extends Course{
    constructor(na,tl){
        super(tl)
        this.name = na
    }

    getData(){
        document.writeln(`<h3>hi, ${this.name} and ${super.getData()}</h3>`)
    }
}

let x = new Person("harry", "ReactJS")
x.getData()