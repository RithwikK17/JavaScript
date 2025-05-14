class Product{
    constructor(a,b){
        this.a = a
        this.b = b
    }

    static calculate(obj){
        console.log(`obj = `, obj)
        document.writeln(`<h3>Product = ${obj.a * obj.b}</h3>`)
    }
}

let x = new Product(10,5)
Product.calculate(x)