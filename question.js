
var userData = localStorage.getItem("newUser");
userData = JSON.parse(userData);
var logData1 = userData.email.slice(0,userData.email.length-10);
var userName = document.getElementById("link1").innerHTML = logData1;
function logOut(){
    window.location.href = "index1.html" ;
    localStorage.removeItem("newUser");
}



var quesNum = 0;
var firstQtn = localStorage.getItem("quiz2");
firstQtn = JSON.parse(firstQtn);
console.log(firstQtn);


document.getElementById("question1").innerHTML = firstQtn[quesNum].ques;
document.getElementById("value1").innerHTML=firstQtn[quesNum].opt1 ;
document.getElementById("value2").innerHTML = firstQtn [quesNum].opt2;
document.getElementById("value3").innerHTML = firstQtn[quesNum] .opt3;
document.getElementById("value4").innerHTML = firstQtn[quesNum].opt4;

var inputValues = document.getElementsByClassName("questions");
inputValues[0].value = firstQtn[quesNum].opt1;
inputValues[1].value = firstQtn[quesNum].opt2;
inputValues[2].value = firstQtn[quesNum].opt3;
inputValues[3].value = firstQtn[quesNum].opt4;

var totalMarks = 0;

function nextQuestion(){
    var inputnames =  document.getElementsByName("r1");
    for(var i = 0; i < inputnames.length; i++){
        if(inputnames[i].checked){
            console.log(inputnames[i].value);
            if(inputnames[i].value === firstQtn[quesNum].ans){
               totalMarks = (100/firstQtn.length) + totalMarks;
               console.log(totalMarks);
            }
        }
    }
    if(quesNum < firstQtn.length-1){
    quesNum++;
document.getElementById("question1").innerHTML = firstQtn[quesNum].ques;
document.getElementById("value1").innerHTML=firstQtn[quesNum].opt1 ;
document.getElementById("value2").innerHTML = firstQtn [quesNum].opt2;
document.getElementById("value3").innerHTML = firstQtn[quesNum] .opt3;
document.getElementById("value4").innerHTML = firstQtn[quesNum].opt4;

inputValues[0].value = firstQtn[quesNum].opt1;
inputValues[1].value = firstQtn[quesNum].opt2;
inputValues[2].value = firstQtn[quesNum].opt3;
inputValues[3].value = firstQtn[quesNum].opt4;
}
else{
    if(totalMarks < 60){
        document.write(  "<h2  style='red'>" + "Sorry you are failed"   + " your,s  marks are " + totalMarks + "</h2>");
    }
    else{
        document.write("<h2 style='color:green'>"  +"Congratulations dear " +  logData1 + " your,s  marks are "  + "<br>" + totalMarks + "</h2>");
    }
}
}

  