// defined variables for password generator
const passwordElement = document.getElementById('password');
const length = 14;

// added variables for password characters
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const special = '!@#$%^&*';
// added variable to combine all characters
const addCharacters = upperCase + lowerCase + numbers + special;

// function to generate password
function generatePassword() {
    let password = "";
    // math.random to generate password, math.floor to round down
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];
// while loop to generate password and add characters based on length
    while (length > password.length) {
        password += addCharacters[Math.floor(Math.random() * addCharacters.length)];
    }
    passwordElement.value = password
    console.log('Password generated');
}

// added variable for button and event listener
const button = document.getElementById('genPassword');
button.addEventListener('click', generatePassword);

// function to copy password to clipboard
function copyPassword() {
    passwordElement.select();
    navigator.clipboard.writeText(passwordElement.value);
    console.log('Password copied to clipboard');
    alert('Password copied to clipboard');
}

// added variable for copy button and event listener
const copyButton = document.getElementById('copy');
copyButton.addEventListener('click', copyPassword);