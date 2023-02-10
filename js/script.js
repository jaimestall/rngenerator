const upperCaseCheckEl = document.getElementById('uppercase-checkbox')
const numberCheckEl = document.getElementById('number-checkbox')
const symbolCheckEl = document.getElementById('symbol-checkbox')
const inputValue = document.querySelector('#password');

let passwordLength = 4;


function generatePassword() {
  let chars = 'abcdefghjklmnpqrstuvwxyz';

  const uppercaseChars = 'ABCDEFGJKLMNPQRSTUVWXYZ';
  const numberChars = '123456789';
  const symbolChars = '!@#$%*&'

  if (upperCaseCheckEl.checked) {
    chars += uppercaseChars
  }
  if (numberCheckEl.checked) {
    chars += numberChars
  }
  if (symbolCheckEl.checked) {
    chars += symbolChars
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length)
    password += chars.substring(randomNumber, randomNumber + 1)
  }
  inputValue.value = password
}

function copy() {
  navigator.clipboard.writeText(inputValue.value)
  console.log('Senha copiada para o clipboard!')
}

const passwordLengthEl = document.querySelector("#password-length")
passwordLengthEl.addEventListener("input", function () {
  passwordLength = passwordLengthEl.value
  document.querySelector("#password-length-text").innerText =
    passwordLength
  generatePassword()
})

document.getElementById("copy-1").addEventListener('click', copy)
document.getElementById("copy-2").addEventListener('click', copy)
document.getElementById("refresh").addEventListener('click', generatePassword)

upperCaseCheckEl.addEventListener('click', generatePassword)
numberCheckEl.addEventListener('click', generatePassword)
symbolCheckEl.addEventListener('click', generatePassword)

generatePassword();