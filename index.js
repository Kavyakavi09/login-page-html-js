
let form =document.getElementById("form-submit");
form.addEventListener("submit",function(event){
   event.preventDefault();
//    console.log(event);
})


let btnclick = document.getElementById("btnclick");

btnclick.addEventListener("click",clickHandler);

 var array = [];

 function clickHandler(){
  let names = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
    
  if(names && (email.includes("@")) && (password.length >=6)){
      alert("Login success");
      array.push(names);
      array.push(email);
      array.push(password);
      console.log(array);
  }
 else{
      alert("Login failed");
  }
  
};



