// DOM elements
let balEl = document.getElementById("balance");
let incEl = document.getElementById("income");
let expEl = document.getElementById("expense");

// Form elements
let formEl = document.getElementById("expenseForm");
let titleEl = document.getElementById("title");
let amountEl = document.getElementById("amount");
let btnEl = document.getElementById("submitBtn");

// Output elements -> transaction list
let listEl = document.getElementById("list");

// Read transactions from localStorage
function readTransactions() {
    return localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions")) : [];
}

// Store data in a variable
let data = readTransactions();

// Create a transaction
function createTransaction(val) {
    data.unshift(val);
    localStorage.setItem("transactions", JSON.stringify(data));
    renderTransactions();
    updateIncExpBalance();
    formEl.reset(); // Clear the form
}

// Render the transactions
function renderTransactions() {
    listEl.innerHTML = ""; // Clear previous list

    data.forEach(item => {
        let typeClass = Number(item.amount) > 0 ? 'income' : 'expense';

        let li = document.createElement('li');
        li.className = typeClass;

        li.innerHTML = `
            <div class="leftItem">
                <span>${item.title}</span>
                <span>${item.amount}</span>
            </div>
            <div class="rightItem">
                <span class="btn edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                </span>
                <span class="btn delete">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </div>
        `;
        listEl.appendChild(li);
    });
}

// Update balance, income, and expense display
function updateIncExpBalance() {
    let amounts = data.map(item => Number(item.amount));

    let total = amounts.reduce((acc, curr) => acc + curr, 0).toFixed(2);
    let income = amounts.filter(val => val > 0).reduce((acc, curr) => acc + curr, 0).toFixed(2);
    let expense = amounts.filter(val => val < 0).reduce((acc, curr) => acc + curr, 0).toFixed(2);

    balEl.innerHTML = `&#8377; ${total}`;
    incEl.innerHTML = `&#8377; ${income}`;
    expEl.innerHTML = `&#8377; ${expense}`;
}

// Handle form submission
formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    let title = titleEl.value.trim();
    let amount = Number(amountEl.value);

    if (title === "" || isNaN(amount) || amount === 0) {
        alert("Please enter a valid title and a non-zero amount.");
        return;
    }

    let newTransaction = {
        id: Date.now(),
        title: title,
        amount: amount
    };

    createTransaction(newTransaction);
});

// Initial render
renderTransactions();
updateIncExpBalance();
