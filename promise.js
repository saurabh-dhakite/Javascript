// const promise = new Promise((resolve, reject) => {
//     setTimeout( () =>{
//     let error = false

//     if(!error){
//         resolve({username: "saurabh", password: "123"})
//     }
//     else{
//         reject("Error in promise")
//     }
// }
//     , 4000)
// })

// async function resolvePromise() {
//     try {
//         const response = await promise
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// resolvePromise()


async function fetchPromise() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1/users')
        console.log("Before JSON Parsing: ");
        console.log(response);

        console.log("After Parsing: ");
        const data = await response.json()
        console.log(data);  
    } catch (error) {
        console.log(error);
    }
}

fetchPromise()