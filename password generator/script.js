const passwordArea = document.getElementById('password_area');
const passwordEl = document.getElementById('password_length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbols');
const buttonEl = document.getElementById('button');
const copyBtn = document.getElementById('copyBtn');


const upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbols = '~!@#$%^&*()+_';

console.log(upperCaseLetter.length)

function getUpperCase() {
    return upperCaseLetter[Math.floor(Math.random() * upperCaseLetter.length)];
}

function getLowerCase() {
    return lowerCaseLetter[Math.floor(Math.random() * lowerCaseLetter.length)];
}

function getNumber() {
    return number[Math.floor(Math.random() * number.length)];
}

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const length = passwordEl.value;
    let password = '';
    if (length > 0 && length <= 32) {
        for (let i = 1; i <= length; i++) {
            let x = randomFunction();
            password += x;
        }
    
        if (!password.includes(undefined)) {
            passwordArea.value = password;
        }
    } else { alert("enter password length between 1 to 32") };
    
}


function randomFunction() {
    const xs = [];
    if (uppercaseEl.checked) {
        xs.push(getUpperCase());
    }

    if (lowercaseEl.checked) {
        xs.push(getLowerCase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbols());
    }

    return xs[Math.floor(Math.random() * xs.length)]
}

buttonEl.addEventListener("click", () => {
    generatePassword(); 
});

// function for copy to clipboard

copyBtn.addEventListener('click', () => {
    // passwordArea.select(); 
    navigator.clipboard.writeText(passwordArea.value);
    if (passwordArea.value != "") {
        alert("password sucessfully copid");
    }
});