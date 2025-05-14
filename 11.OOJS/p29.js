// encapsulation 
// accessor roperty (get and set)

class User{
    constructor(){
        //alias
        this._name = []
    }

    set name(val){
        this._name.push(val)
    }

    get name(){
        return this._name[this._name.length -1]
    }
}

let u1 = new User()

u1.name = "harry"
console.log(`name =`, u1.name)

u1.name = "sam"
console.log(`name =`, u1.name)

u1.name = "harvey"
console.log(`name =`, u1.name)