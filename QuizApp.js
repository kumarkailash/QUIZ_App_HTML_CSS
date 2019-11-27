var questionarray = [];
function quzizbtn() {
  var question = document.getElementById("question").value;
  var option1 = document.getElementById("opt1").value;
  var option2 = document.getElementById("opt2").value;
  var option3 = document.getElementById("opt3").value;
  var option4 = document.getElementById("opt4").value;
  var answer = document.getElementById("ans").value;
    
  function Quiz(question, option1, option2, option3 ,option4,answer) {
    this.ques = question;
    this.opt1 = option1;
    this.opt2 = option2;
    this.opt3 = option3;
    this.opt4 = option4;
    this.ans = answer;
  }
  var allQuestions = new Quiz(question, option1, option2, option3 ,option4,answer);
  questionarray.push(allQuestions)
  console.log(questionarray);
  question = " ";
  option1 = " ";
  option2 = " ";
  option3 = " ";
  option4 = " ";
  
}



function send() {
  questionarray =  JSON.stringify(questionarray);
localStorage.setItem("quiz2",questionarray);
  window.location.assign("index.html");
}




