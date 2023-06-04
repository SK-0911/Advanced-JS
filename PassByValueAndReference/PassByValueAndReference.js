"use strict";

function passByValueAndReference() {

    let name = "Tyson";
    let person = {name: "Myra", city: "Austin"};

    console.log("Initial value of name = ", name);
    console.log("Initial value of person = ", person);

    modifyData(name, person);

    console.log("Final value of name = ", name);
    console.log("Final value of person = ", person);
}

function modifyData(primitiveType, objectType) {
    
    primitiveType = "Victor";
    objectType.name = "Olivia";

    console.log("Updated primitiveType: ", primitiveType);
    console.log("Updated objectType: ", objectType);

}

passByValueAndReference();
