// Question 1

function receivingFunction(callback){
    let type = typeof(callback)

    if(typeof callback === "function"){
        callback()
    }
    else {
        console.log("This is not a function but a " + type)
    }
}

function callbackFunction(){
    console.log("this is a callback")
}

receivingFunction(callbackFunction)


// Question 2

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function(Prize, i){
    console.log(`Prize ${i + 1}: ${prizes[i]}`)
} )

// Question 3

let secondCounter = 2

setTimeout(function1, secondCounter * 1000)

function function1()
    {
        console.log(` I waited ${secondCounter} seconds before executing`)
}

// Question 4

let numbers = 0;

function loopFunction(){

    numbers++;

    if(numbers === 4){
        clearInterval(theFinal)
    }
    console.log(numbers)
}

const theFinal = setInterval(loopFunction, 1500)


