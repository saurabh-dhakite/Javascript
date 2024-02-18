const emp = {
    name : "Saurabh",
    age : "19",
    address : {
        city : "Akola",
        state : "Maharashtra",
        country : "India"
    }
}

const new_emp = Object.assign({} , emp , {bloodgrp : "A+"})
console.log(new_emp);


console.log(Object.keys(emp))