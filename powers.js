console.log("PEwPew")

/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button.

    Then write the function that has instructions
    for activating the corresponding power.

    The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/
document.querySelector("#activate-flight").addEventListener("click", handlerFunction)

function handlerFunction(){
    let section = document.querySelector("#flight");
    section.classList.toggle("enabled");
    section.classList.toggle("disabled");
    // let flightButton = document.querySelector("#activate-flight");
    // flightButton.textContent("Disable Flight")
}

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/
document.querySelector("#activate-mindreading").addEventListener("click", handlerFunction1)

function handlerFunction1(){
    let section1 = document.querySelector("#mindreading");
    section1.classList.toggle("enabled");
    section1.classList.toggle("disabled");
}


document.querySelector("#activate-xray").addEventListener("click", handlerFunction2)

function handlerFunction2(){
    let section2 = document.querySelector("#xray");
    section2.classList.toggle("enabled");
    section2.classList.toggle("disabled");
}
/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/