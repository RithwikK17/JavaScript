/* 
    Wallet Class
        balance - property

    Methods
        debit(val)
        credit(val)
*/

/* class Wallet {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    static debit(walletInstance, val) {
        if (!(walletInstance instanceof Wallet)) {
            console.log("Invalid wallet instance.");
            return;
        }
        if (val <= 0) {
            console.log("Debit amount must be positive.");
            return;
        }
        if (val > walletInstance.balance) {
            console.log("Insufficient funds.");
            return;
        }
        walletInstance.balance -= val;
        console.log(`Debited ${val}. New balance: ${walletInstance.balance}`);
    }

    
    static credit(walletInstance, val) {
        if (!(walletInstance instanceof Wallet)) {
            console.log("Invalid wallet instance.");
            return;
        }
        if (val <= 0) {
            console.log("Credit amount must be positive.");
            return;
        }
        walletInstance.balance += val;
        console.log(`Credited ${val}. New balance: ${walletInstance.balance}`);
    }
}

const myWallet = new Wallet(100);
Wallet.credit(myWallet, 50);
Wallet.debit(myWallet, 30); */

class Wallet{
    constructor(val){
        this.balance = val
    }

    debit(val){
        if(val > this.balance){
            document.writeln(`<h3>Sorry, Insufficient balance, and current balance is &#8377; ${this.balance}</h3>`)
        } else{
            this.balance -= val
            document.writeln(`<h3>Amount of sum &#8377; ${val} is credited to wallet and balance is &#8377; ${this.balance}</h3>`)
        }
    }

    credit(val){
        this.balance += val
        document.writeln(`<h3>Amount of sum &#8377; ${val} is credited to wallet and balance is &#8377; ${this.balance}</h3>`)
    }
}

let x = new Wallet(0)

x.credit(1000)
x.debit(500)
x.debit(600)