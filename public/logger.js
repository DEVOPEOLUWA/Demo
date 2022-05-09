'use strict';
const loginForm = document.querySelector('form.login');
const signupForm = document.querySelector('form.signup');
const loginBtn = document.querySelector('label.login');
const signupBtn = document.querySelector('label.signup');
const signupLink = document.querySelector('.signup-link a');
const loginText = document.querySelector('.title-text .login');
const signupText = document.querySelector('.title-text .signup');
const submit = document.querySelector('#submit');
const login = document.querySelector('#login');

const setError = (element, message) => {
  const input = element.parentElement;
  const errorDisplay = input.querySelector('.error');
  errorDisplay.innerText = message;
  // styling the validation content
  errorDisplay.style.color = '#970000';
  errorDisplay.style.fontSize = '20px';
  errorDisplay.style.paddingBottom = '14px';
  input.classList.add('error');
  input.classList.remove('success');
};
const setSuccess = (element) => {
  const input = element.parentElement;
  const errorDisplay = input.querySelector('.error');
  errorDisplay.innerText = '';
  input.classList.add('success');
  input.classList.remove('error');
};
const validateInputsTwo = () => {
  let firstName = document.querySelector('#firstname');
  let lastName = document.querySelector('#lastname');
  if (firstName.value === '') {
    setError(firstName, 'First name is required*');
  } else {
    setSuccess(firstName);
  }
  if (lastName.value === '') {
    setError(lastName, ' last name is required*');
  } else {
    setSuccess(lastName);
  }
};
const validateInputs = () => {
  let firstName = document.querySelector('#firstname');
  let lastName = document.querySelector('#lastname');
  let email = document.querySelector('#email');
  let passswordOne = document.querySelector('#password');
  let passwordTwo = document.querySelector('#password-2');
  if (firstName.value === '') {
    setError(firstName, 'First name is required*');
  } else {
    setSuccess(firstName);
  }
  if (lastName.value === '') {
    setError(lastName, ' last name is required*');
  } else {
    setSuccess(lastName);
  }
  if (email.value === '') {
    setError(email, 'email is required*');
  } else {
    setSuccess(email);
  }
  if (passswordOne.value === '') {
    if (passswordOne.value.length > 8) {
      setError(passswordOne, 'password must be 8 characters*');
    }
    setError(passswordOne, 'password is required*');
  } else {
    setSuccess(passswordOne);
  }
  if (passwordTwo.value === '') {
    setError(passwordTwo, 'password is required*');
  }
  if (passwordTwo.value !== passswordOne.value) {
    setError(passwordTwo, 'password not the same!*');
  } else {
    setSuccess(passswordOne);
  }
};
const signUP = () => {
  loginForm.style.marginLeft = '-50%';
  loginText.style.marginLeft = '-50%';
};
signupBtn.addEventListener('click', signUP);
submit.addEventListener('click', validateInputs);
const logIn = () => {
  loginForm.style.marginLeft = '0%';
  loginText.style.marginLeft = '0%';
};
loginBtn.addEventListener('click', logIn);
login.addEventListener('click', validateInputsTwo);
const linkClicked = () => {
  signUP();
  return false;
};
signupLink.addEventListener('click', linkClicked);
