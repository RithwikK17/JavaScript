let nameEl = document.getElementById("name")
let statusEl = document.getElementById("status")

function submitHandler(e){
    e.preventDefault(); // to avoid page refresh 
    let data = nameEl.value;
    console.log(`user name =`, data)

    //regular expression
    let regex = /^[A-Za-z]+$/;

    if(regex.test(data)){
        statusEl.innerHTML = `<h3 class="success"> Valid name </h3>`
        console.log(`username =`, data)
    } else {
        statusEl.innerHTML = `<h3 class="danger">Invalid Name</h3>`
    }
}