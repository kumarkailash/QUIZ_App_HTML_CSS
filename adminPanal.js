var email = document.getElementById("email");
var password = document.getElementById("password");
var message = document.getElementById("message");


function logIn(){


 var userExits = false;
    if(email.value === "kailashkumar@gmail.com" && password.value === "kailash123"){
        userExits = true;
}
if(userExits === true){
    email.value = "";
    password.value = "";
    window.location.href = "QuizApp.html";

}

else{
    message.innerHTML = "Login Failed"
}


}