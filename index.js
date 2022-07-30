function ValidateEmail(){

   
    let form = document.getElementById('form');
    let Email = document.getElementById('email').value;
    let fName = document.getElementById('fname').value;
    let lName = document.getElementById('lname').value;
    let password = document.getElementById('password').value;
    let ValidEmail = document.getElementById('emailarea')
    let firstName = document.getElementById('fnamearea')
    let lastName = document.getElementById('lnamearea')
    let Password = document.getElementById('passwordarea')
    let format = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    console.log(Email, fName, lName, password)

    if(Email.match(format)){
        ValidEmail.innerHTML = "";
    }
    else if(Email == ""){
    ValidEmail.innerHTML = "⚠️ Please Enter an Email Address";
    ValidEmail.style.color = " yellow"
    ValidEmail.style.fontSize = '15px';
    }
    else 
    {
        ValidEmail.innerHTML = "Please Enter Valid Address";
    ValidEmail.style.color = "#ff0000"
    ValidEmail.style.fontSize = '15px';
    }
    if(fName ==""){
        firstName.innerHTML = "Please Enter Your First Name";
        firstName.style.color = " #ff0000";
    firstName.style.fontSize = '15px';
    }
    else if(fName !==""){
        firstName.innerHTML = "";
    } 
    if(lName ==""){
        lastName.innerHTML = "Please Enter Your Last Name";
        lastName.style.color = " #ff0000";
    lastName.style.fontSize = '15px';
    }
    else if(lName !==""){
        lastName.innerHTML = "";
    }
     if(password ==""){
        Password.innerHTML = "Please Enter password";
        Password.style.color = " #ff0000"
    Password.style.fontSize = '15px';
    }
    else if(password !==""){
        Password.innerHTML = "";
    }
    Email.value = "";
}