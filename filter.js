let expenses = [
    {amount: 2000, category: "Grocery"},
    {amount: 4000, category: "Entertainment"},
    {amount: 200, category: "My Bills"}
]

let GroceryExpense = expenses.filter((obj)=> obj.category === "Grocery")

console.log(GroceryExpense);
