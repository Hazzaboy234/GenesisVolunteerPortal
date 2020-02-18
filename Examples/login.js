var button = document.getElementById("login-button");
button.addEventListener("click",validate);


function validate(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    var validator = new RegExp("\w+@\w+[.]\w+");
    var isEmailValid=validator.test(email);
    var isPasswordValid=true;

    console.log(isEmailValid);
    console.log(isPasswordValid);

    if(isEmailValid===true && isPasswordValid===true){
        //Do cheeky request
        
    }else{
        alert("Invalid info fool");
    }


    
}