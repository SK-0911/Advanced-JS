"use strict";

let items = [
    { name: "meat", price: 25 },
    { name: "vegetables", price : 17 } ,
    { name: "cake", price :20 },
    { name: "drinks", price: 38}
];
/*
function getTotalCost(items){
    return items.reduce((sum, item) => sum + item.price, 0);
}

var totalCost = getTotalCost(items);
console.log("Total cost: ", totalCost);
*/
function applyTaxes(totalCost){
    return 1.05 * totalCost;
}

//console.log("Total after taxes: ", applyTaxes(totalCost));

function getTotalCost(items, callback){
    var totalCost = items.reduce((sum, item) => sum + item.price, 0);
    return callback(totalCost);
}

var totalAfterTaxes = getTotalCost(items, applyTaxes);
console.log("Total after taxes (callback): ", totalAfterTaxes);
















