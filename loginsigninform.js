var email = document.getElementById("email");
var password = document.getElementById("password");
var message = document.getElementById("message");


 
function signup(){
  

     window.location.href = "sform.html"
    //  window.close();


}

    



function logIn(){
    var users = localStorage.getItem('users');
    console.log(users);


    var userObject = {
        email : email.value,
        password : password.value
    }
if(users === null){
    users = []
}
else{
    users = JSON.parse(users);
// console.log(users);
}


 var userExits = false;

for(var i =0 ; i <users.length; i++){
    if(users[i].email === email.value && users[i].password ===  password.value ){
        userExits = true;
    }

}
if(userExits === true){
    var newUser = JSON.stringify(userObject);
    localStorage.setItem("newUser",newUser);
    email.value = "";
    password.value = "";
    window.location.href = "question.html";


}

else{
    message.innerHTML = "Login Failed"


}
}