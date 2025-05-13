// Constructors
/* 
    1. It follows a function syntax
    2. Name of constructor, first letter is uppercase (not mandatory)
    3. paramater and non-parameter constructor
    4. no return type
    5. every property of constructor create using 'this' keyword
    6. we can access property of constructor by ref/instance using new keyword


    function Constructor (param){
        this.property = value;
        this.property = value;
    }


    let ref = new Constructor(param);
    ref.property;
*/

function User() {
    this.name = "John"
    this.email = "john@gamil.com"
    this.mobile = "984567038"
    this.age = 22
    this.hobbies = ["cricket","badminton","gym"]
    this.account ={
        bankName: "Axis",
        accNo: 3186
    };
    this.city = "Bengaluru"
    this.getUser = function(){
        return "username is " + this.name
    };
    this.getEmail = () =>{
        document.writeln(`<h3>user email =${this.email}</h3>`)
    }
}

let x = new User();
console.log(`oject/ref/instance =`, x)

document.writeln(`<h3>${x.getUser}</h3>`)
document.writeln(`<h3>${x.getEmail}</h3>`)
document.writeln(`<h3> mobile =${x.mobile}</h3>`)
document.writeln(`<h3> age =${x.age}</h3>`)
document.writeln(`<h3> A/C No =${x.account.bankName}</h3>`)
document.writeln(`<h3> City =${x.city}</h3>`)

x.hobbies.forEach((item) => {
    document.writeln(`<h3> ${item} </h3>`)
})