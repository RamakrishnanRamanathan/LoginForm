const signUpMail = document.querySelector("form #signUpEmail");
const createPasswords = document.querySelector("form #createPassword");
const confirmPasswords = document.querySelector("form #confirmPassword");
const btn = document.querySelector("button#signUpBtn");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  const registeredMail = signUpMail.value;
  const createPassword = createPasswords.value;
  const confirmPassword=confirmPasswords.value;
  const uppercase=/[A-Z]/;
  const lowercase=/[a-z]/;
  const number=/[0-9]/;
  const symbol=/[!@#$%^&*]/;
  let isUpper=false;
  let isLower=false;
  let isNumber=false;
  let isSymbol=false;
  for(let i in createPassword){
    if(uppercase.test(createPassword[i])){
      isUpper=true;
    }else if(lowercase .test(createPassword[i])){
     isLower=true;

    }else if(number.test(createPassword[i])){
      isNumber=true;
    }else if(symbol.test(createPassword[i])){
      isSymbol=true;
    }

    
  }if(isLower&&isNumber&&isUpper&&isSymbol){
    if(createPassword===confirmPassword){
      alert("✅Successfully created")

    }else{
      alert("please check")
    }
  }else{
    alert("password must contains one uppercase,lowercase,specialsymbol and a number ")
  }
});
