const loginMails=document.querySelector("form #inputName");
 const passwords=document.querySelector("form #loginPassword")
const loginBtn=document.querySelector("button#loginBtn");
 loginBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(loginMails.value==="rama2003@gmail.com" && (passwords.value==="Govindhr@m369")){
       alert("successfully loged in") 
    }
})