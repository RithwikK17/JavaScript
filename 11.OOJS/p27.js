//super class
class Account{
    constructor(ac,bal){
        this.account = ac
        this.balance = bal
    }

    //debit
    debit(val){
        if(val > this.balance){
            document.writeln(`<h3>Insufficient balance in account</h3>`)
        } else {
            this.balance -= val
        }
    }

    //credit
    credit(val){
        this.balance += val
    }

    getAccountInfo(){
        return `Account id = ${this.account} and balance is &#8377; ${this.balance}`
    }
}

class User extends Account{
    constructor(na,acc,bal){
        super(acc,bal)
        this.name = na
    }

    getCompleteInfo(){
        return `Hi ${this.name} your account details is ${this.getAccountInfo()}`
    }
}

let u1 = new User("tom", 123456, 1000)
document.writeln(`<h3>${u1.getCompleteInfo()}</h3>`)

u1.credit(2400)
document.writeln(`<h3>${u1.getCompleteInfo()}</h3>`)

u1.debit(245.578)
document.writeln(`<h3>${u1.getCompleteInfo()}</h3>`)

u1.debit(5000)