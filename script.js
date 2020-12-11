const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmpwd");

// Form Event Listener On Submit
form.addEventListener('submit',e => {
    e.preventDefault();

    //validate inputs
    checkInputs(); 
})

function getInputValue(input) {
    return input.value.trim();
}

function checkInputs() {
    // get values form the input
    const usernameValue = getInputValue(username);
    const emailValue = getInputValue(email);
    const passwordValue = getInputValue(password);
    const password2Value = getInputValue(password2);

    // validate each input

    // USERNAME
    if(usernameValue === '') {
        // display error
        //add error class
        setError(username,"This field cannot be empty");
    } else {
        // add success class
        setSuccessFor(username);
    }
    // EMAIL
    if(emailValue === '') {
        setError(email,"Please don't leave this field blank");
    } else if(!isEmail(emailValue)) {
        setError(email,"Please enter a valid email address");
    } else {
        setSuccessFor(email);
    }
    // PASSSWORD
    if(passwordValue === '') {
        setError(password,"Enter Password!");
    } else {
        setSuccessFor(password);
        if(password2Value === '' || password2Value !== passwordValue) {
            setError(password2,"Passwords do not match")
        } else {
            setSuccessFor(password);
            setSuccessFor(password2);
        }
    }


}

function setError(input,message) {
    const inputBlock = input.parentElement;
    const small = inputBlock.querySelector("small");

    // set display message
    small.innerText = message;
    // add error class
   inputBlock.className = "input-block error";
}

function setSuccessFor(input) {
    const inputBlock = input.parentElement;
    // add success class
    inputBlock.className = "input-block success";
}

// validate email
function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}