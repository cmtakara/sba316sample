// console.log('script is linked');
const formFields = {
    fname: 'First Name',
    lname: 'Last Name',
    uname: 'Username',
    role: 'Role',
    pword: 'Password',
    pword2: 'Confirm Password'
}

let inputDisplay = '';
let pwordCheck = '';

// Cache at least one element using selectElementById.
const submitForm = document.getElementById('submit-form');
// making sure my form is actually cached before I use it
// console.log(submitForm);

// adding event listener to the form so that I know when the submit button is pushed
// Register at least two different event listeners and create the associated event handler functions.
// event listener 1 of 2 required.
submitForm.addEventListener("submit", registerUser);

function registerUser(evt) {
    evt.preventDefault();
    inputDisplay = '';
    pwordCheck = '';

    let inputsAllValid = true;
    // these are not required, just checking what the event looks like
    // console.log('submit button was pushed');
    // console.log(evt.target);
    const userInputs = submitForm.querySelectorAll('input');
    // console.log(userInputs);
    // the role was not included in the inputs because it is 'select' and not 'input'
    const userRole = submitForm.querySelector('select');
    // console.log('userRole');
    // console.log(userRole.value);
    inputDisplay += `<p>Role: ${userRole.value} </p>`;
    // console.log(inputDisplay);


    // validate the user inputs
    // this is a requirement that is not completed yet *****
    // ***** what do I do if not all inputs are valid?
    //          what do I do if they are?
    // console.log('----- userInputs is: -----')
    // console.log(userInputs);
    userInputs.forEach(uInput => {
        // console.log(uInput.name)
        // console.log(uInput.value);
        // if the input is valid, add it to the output
        if (!validateInput(uInput)) {
            inputsAllValid = false;
            console.log('this input is not valid');
        } else {
            // console.log('going in to addInput')
            addInput(uInput);
        }

    })

    inputsAllValid ? console.log('all inputs valid') : console.log('not all inputs valid')
    document.getElementById('user-inputs').innerHTML = inputDisplay;

}

function validateInput(userInput) {
    // console.log(userInput.name);
    // console.log(userInput.value);
    return true;
}

function addInput(userInput) {
    console.log('in addInput')
    console.log(userInput.name);
    console.log(userInput.value);
    if (userInput.name) {
        // find the key in formFields that the userInput.name matches
        // use that to create <p> label: value </p>
        console.log('add this input value');
        // if (userInput.name === 'pword') {
        //     console.log('password');
        //     pwordCheck = userInput.value;
        //     inputDisplay += '<p>Password: NOT DISPLAYED</p>'
        // } else if (userInput.name === 'pword2') {
        //     console.log('confirm password');
        //     if (userInput.value === pwordCheck) {
        //         inputDisplay += '<p>Confirm Password: NOT DISPLAYED</p>'
        //     } else {
        //         inputDisplay += '<p>Confirm Password: did not match password</p>'
        //     }
        // } else {
            console.log('non password fields');
            inputDisplay += `<p> ${formFields[userInput.name]}: ${userInput.value} </p>`
            // console.log('text for display')
            // console.log(formFields[userInput.name]);
            // console.log(userInput.value);
            // console.log('--------------');
            console.log(inputDisplay);
        // }
    }
}