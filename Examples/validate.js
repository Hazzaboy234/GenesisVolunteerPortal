/*
    Function that checks if input credentials exist in DB
    returns boolean
*/
function combinationExists(email,password){
    //Do ajax request to back-end to find out if the email and password exist in the database
    return false;
}

function validate(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    /*
    Front-end validation
    ensure email and password match the sign-up criteria now
    because if they don't they definately can't be a valid entry in the database
    so there is no need to go and check
    */
    var isEmailValid=RegExp("(\\w+@\\w+[.]\\w+)").test(email);
    var isPasswordValid=RegExp("^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*").test(pass);

    
    if(((isEmailValid===true && isPasswordValid===true))&&(combinationExists(email,pass)===true)){
        //insert cookie information
        alert("Information valid!");
        //redirect to next window
    }else{
        alert("Invalid info \nEmail:"+email+"\npass:"+pass);
    }    
}
document.getElementById("login-button").addEventListener("click",validate);
