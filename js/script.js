const upperCaseCheckEl = document.getElementById('uppercase-checkbox')
const numberCheckEl = document.getElementById('number-checkbox')
const symbolCheckEl = document.getElementById('symbol-checkbox')
const inputValue = document.querySelector('#password');
const securityBarEl = document.querySelector('#security-indicator-bar')

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
  calculateQuality()
}

function calculateQuality() {
  const percent = Math.round((passwordLength / 20) * 60 + (upperCaseCheckEl.checked ? 10 : 0) + (symbolCheckEl.checked ? 15 : 0) + (numberCheckEl.checked ? 15 : 0))
  securityBarEl.style.width = `${percent}%`
  if (percent > 69) {
    securityBarEl.classList.remove('critical')
    securityBarEl.classList.remove('warning')
    securityBarEl.classList.add('safe')
  } else if (percent > 50) {
    securityBarEl.classList.remove('critical')
    securityBarEl.classList.add('warning')
    securityBarEl.classList.remove('safe')
  } else {
    securityBarEl.classList.add('critical')
    securityBarEl.classList.remove('warning')
    securityBarEl.classList.remove('safe')
  }
  if (percent >= 100) {
    securityBarEl.classList.add('completed')
  } else {
    securityBarEl.classList.remove('completed')
  }
}

function calculateFontSize() {
  if (passwordLength > 16) {

  } else if (passwordLength > 8) {

  } else {

  }
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