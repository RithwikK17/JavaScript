// to call any REST API 
const URL = "https://dummyjson.com"

let resp = fetch(`${URL}/products`,{
    method: "GET",
    headers:{
        "ContentType": "application/json"
    }
}).then(res=> res.json()).then(res=>{
    console.log(`resolved =`, res)
    printData(res?.products)
}).catch(err =>{
    console.error(err.message)
})

// console.log(`res =`, resp)

// resp.then(res=>{
//     console.log(`resolved =`, res)
// }).catch(err =>{
//     console.error(err.message)
// })

let container = document.getElementById("container")

function printData(data){
    data.forEach(function(item,index){
        container.innerHTML += `<div class="card">
                                <img src="${item?.thumbnail}"/>
                                <div>
                                    <h5> ${item?.title}</h5>
                                    <p>
                                        <strong>Price: </strong>
                                        <span> &#8377; ${item?.price}</span>
                                    </p>
                                </div>
                            </div>`
    })
}