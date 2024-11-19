//a function called calculateTax that accepts income of a person
function calculateTax(income){
    let taxRate = 0.15;
    return income * taxRate;
}

console.log(calculateTax(600000));