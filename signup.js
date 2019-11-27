function submitform(){
    
    var targetField = document.getElementById("firstName");
 if (targetField.value.length === 0) {
 alert("Please enter Feild first");
 targetField.focus();
 targetField.style.background = "yellow";
 return false;
 }
  targetField.style.background = "white";


    var firstname =   document.getElementById("firstName");
    var  lastName =  document.getElementById("lastname");
     var email =     document.getElementById("email");
     var password =  document.getElementById("password");
     var contect =   document.getElementById("contect");
     var age =   document.getElementById("age");
    
    //  console.log(firstname);
    //  console.log(lastName);
    //  console.log(email);
    //  console.log(password);
    //  console.log(contect);
    
        
            var users = localStorage.getItem('users');
            console.log(users);
        
        
        
        if(users === null){
    
            users = []
            console.log(users)
        }
        else{
            users = JSON.parse(users);
        console.log(users);
        }
        var userObject = {
            firstname : firstname.value,
            lastName : lastName.value,
            email : email.value,
            password : password.value,
            contect : contect.value,
            age : age.value
    
        }
    console.log(userObject);
        users.push(userObject);
    console.log(users)
    
        users = localStorage.setItem('users',JSON.stringify(users))
        window.location.assign("index1.html");
    
    }