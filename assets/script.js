// defined variables for password generator
const passwordElement = document.getElementById('password');
const length = 14;

// added variables for password characters
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const special = '!@#$%^&*';

const addCharacters = upperCase + lowerCase + numbers + special;

// function to generate password
function generatePassword() {
    let password = "";
    // math.random to generate password, math.floor to round down
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];

    while (length > password.length) {
        password += addCharacters[Math.floor(Math.random() * addCharacters.length)];
    }
}