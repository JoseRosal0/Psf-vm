
const formulario=document.querySelector('#formulario');
const nameInput=document.querySelector('#name-input');
const emailInput=document.querySelector('#email-input');
const passwordInput=document.querySelector('#password-input');
const matchInput=document.querySelector('#match-input');
const btnInput=document.querySelector('#form-btn');
//import express from "express";
//console.log(axios);

//validar con expresiones regulares 
const emailVal=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const nameVal=/^[a-zA-Z0-9_]{3,16}$/;
const passwordVal=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm

let valemail=false;
let valpass=false;
let valmatch=false;
let valname=false;

nameInput.addEventListener('change',e=>{
  //var temporal = e.target.value;
  valname=nameVal.test(e.target.value);
  console.log(valname,"valname");
  validar(nameInput,valname);
  
})

emailInput.addEventListener('change',e=>{
  valemail= emailVal.test(e.target.value);
  console.log(valemail);
  validar(emailInput,valemail);
  
})

passwordInput.addEventListener('change',e=>{
  valpass= passwordVal.test(e.target.value);
  console.log(valpass)
  validar(passwordInput,valpass);
  validar(matchInput,valmatch);


})



matchInput.addEventListener('change',e=>{
  valmatch = e.target.value===passwordInput.value;
  console.log(valmatch);
  validar(matchInput,valmatch);
  validar(passwordInput,valpass);

})

const validar=(input,value)=>{
  btnInput.disabled=valname&&valemail&&valpass&&valmatch ?false :true
  if(value===true){
    input.classList.remove('focus:outline-blue-600');
    input.classList.add('focus:outline-green-700')
  }else if(input.value===""){
    input.classList.remove('focus:outline-green-700');
    input.classList.remove('focus:outline-red-600');
    input.classList.add('focus:outline-blue-600');
    


  }else{
    input.classList.remove('focus:outline-blue-600')
    input.classList.remove('focus:outline-green-700')
    input.classList.add('focus:outline-red-700')
  }
}

formulario.addEventListener('submit',async e=>{
  e.preventDefault();

  try{
    const newUser={
      name:nameInput.value,
      email:emailInput.value,
      password:passwordInput.value
    }
    console.log(newUser,'newUser');
    formulario.reset();
    /*let valemail=false;
    let valpass=false;
    let valmatch=false;
    let valname=false;*/

    //request
    const response = await axios.post('/api/user',newUser);
    console.log(response,"response form");
    //createNotification(false,response.data.msg);
    //console.log(newUsers);

  }catch(error){
    console.log(error);
  }
})