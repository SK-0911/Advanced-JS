"use strict";

let addition = function(a, b) {
    return a+b;
}

let multiplication = function(a, b) {
    return a*b;
}

let subtraction = function(a, b) {
    return a-b;
}

let division = function(a, b) {
    return a/b;
}


function calculation(a, b, calculationType) {
    return calculationType(a, b);
}

let output = calculation(10, 30, addition);
console.log("Addition output = ", output);

output = calculation(10, 30, division);
console.log("Division output = ", output);

let fxRates = {
    INR: 72,
    EUR: 0.9
}

let discounts = {
    INR: 0.1,
    EUR: 0.2
}

let inCart = {
    id: 1,
    total: 81000,
    currency: "INR"
}

let euCart = {
    id: 2,
    total: 772,
    currency: "EUR"
}

function getTotalPriceFn(cart){

    cart.finalTotal = cart.total * (1 - discounts[cart.currency]);

    function totalUSDPrice(){
        return cart.finalTotal / fxRates[cart.currency];
    }

    return totalUSDPrice;
}

let inCartTotalUSD = getTotalPriceFn(inCart);

console.log("Type of returned function: ", typeof inCartTotalUSD);

console.log("Total of order from India: ", inCartTotalUSD());

let euCartTotalUSD = getTotalPriceFn(euCart);
console.log("Total of order from EU: ", euCartTotalUSD());



























