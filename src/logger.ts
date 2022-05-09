const loginForm = document.querySelector('form.login') as HTMLFormElement;
    const signupForm = document.querySelector('form.signup') as  HTMLFormElement;
    const loginBtn = document.querySelector('label.login')!;
    const signupBtn = document.querySelector('label.signup')!;
    const signupLink = document.querySelector('.signup-link a') as HTMLAnchorElement;
    const loginText = document.querySelector('.title-text .login') as HTMLDivElement;
 const signupText = document.querySelector('.title-text .signup')  as HTMLDivElement;
 const submit = document.querySelector('#submit')  as HTMLInputElement
 const login = document.querySelector('#login')  as HTMLInputElement


 const setError = (element :any,message:string) =>{
  const input = element.parentElement;
  const errorDisplay = input.querySelector('.error') as HTMLDivElement
  errorDisplay.innerText = message;
  // styling the validation content
  errorDisplay.style.color = '#970000';
  errorDisplay.style.fontSize = '20px'
  errorDisplay.style.paddingBottom = '14px'
  input.classList.add('error');
  input.classList.remove('success');
  }
  const setSuccess = (element : any) => {
   const input = element.parentElement;
  const errorDisplay = input.querySelector('.error') as HTMLDivElement
  errorDisplay.innerText = '';
  input.classList.add('success');
  input.classList.remove('error');
  }

  const validateInputsTwo = () => {
   let firstName = document.querySelector('#firstname') as HTMLInputElement;
   let lastName = document.querySelector('#lastname') as HTMLInputElement;

   if ( firstName.value === ''){
    setError(firstName,'First name is required*')
   }
   else{
    setSuccess(firstName)
   }
   if (lastName.value === ''){
    setError(lastName,' last name is required*')
   }
   else{
    setSuccess(lastName)
   }
  }

  const validateInputs = () =>{
   let firstName = document.querySelector('#firstname') as HTMLInputElement;
   let lastName = document.querySelector('#lastname') as HTMLInputElement;
   let email = document.querySelector('#email') as HTMLInputElement
   let passswordOne = document.querySelector('#password') as HTMLInputElement
   let passwordTwo = document.querySelector('#password-2') as HTMLInputElement
  
   if ( firstName.value === ''){
    setError(firstName,'First name is required*')
   }
   else{
    setSuccess(firstName)
   }
   if (lastName.value === ''){
    setError(lastName,' last name is required*')
   }
   else{
    setSuccess(lastName)
   }
   if (email.value === ''){
    setError(email,'email is required*')
   }
   else{
    setSuccess(email)
   }
   if (passswordOne.value === ''){
    if(passswordOne.value.length > 8){
     setError(passswordOne,'password must be 8 characters*')
    }
    setError(passswordOne,'password is required*')
   }
   else{
    setSuccess(passswordOne)
   }
   if (passwordTwo.value === ''){
    setError(passwordTwo,'password is required*')
   }
   if(passwordTwo.value !== passswordOne.value){
    setError(passwordTwo,'password not the same!*')
   }
   else{
    setSuccess(passswordOne)
   }
   
  
  }
  


const signUP = () =>{
 loginForm.style.marginLeft = '-50%';
   loginText.style.marginLeft = '-50%';
}

signupBtn.addEventListener('click' ,signUP)
submit.addEventListener ('click',validateInputs)

const logIn = () =>{
 loginForm.style.marginLeft = '0%';
   loginText.style.marginLeft = '0%';
}

loginBtn.addEventListener('click',logIn);
login.addEventListener('click',validateInputsTwo);


const linkClicked = () =>{
 signUP();
 return false;
}

signupLink.addEventListener('click',linkClicked);