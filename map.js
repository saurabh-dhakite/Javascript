let expenses = [
    {amount: 2000, category: "Grocery"},
    {amount: 4000, category: "Entertainment"},
    {amount: 200, category: "Bills"}
]

let taxArr = []
expenses.map((obj)=>{
    taxArr.push(obj.amount*.1)
})

console.log(taxArr);