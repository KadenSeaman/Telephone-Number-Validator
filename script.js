//Variables
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div")

//Methods & Functions
const phoneNumberIsValid = () => {
    const pattern = /^(1?\s?([0-9]{3}|\([0-9]{3}\))\s?-?\s?[0-9]{3}\s?-?[0-9]{4})$/
    return pattern.test(userInput.value);
}


//Inits & EventListeners
clearButton.addEventListener("click",(e) => {
    userInput.value="";
    e.preventDefault();
    results.innerHTML = "<p></p>";

})

checkButton.addEventListener("click", (e) =>{
    e.preventDefault();

    if (userInput.value === ""){
        alert("Please provide a phone number")
        return;
    }

    results.classList.toggle("hide");
    if(phoneNumberIsValid()) {
        results.innerHTML = `<p>Valid US number: ${userInput.value}</p>`;
    }
    else{
        results.innerHTML = `<p>Invalid US number: ${userInput.value}</p>`;

    }
})