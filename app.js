var userName = document.getElementById("userName");
var rollNo = document.getElementById("rollNo");
var qIndex = 0;
var answersArr = [];
var score = 0;
function startQuiz() {
  if (userName.value.trim() === "" && rollNo.value.trim() === "") {
    Swal.fire({
      title: "Wait a moment!",
      text: "Please enter your name and roll number to begin.",
      icon: "warning",
      iconColor: "#896A58",
      background: "#D9D8D5",
      color: "#2A2420",
      confirmButtonText: "Got it!",
      confirmButtonColor: "#567257",
      buttonsStyling: true,
      backdrop: `rgba(42, 36, 32, 0.4)`,
    });
  } else {
    localStorage.setItem("userName", userName.value);

    window.location.href = "quiz.html";
  }
}
var stdName = document.getElementById("stdName");

var storeName = localStorage.getItem("userName");
stdName.innerText = storeName;

Swal.fire({
  title: "Login Successful!",
  text: "Welcome back! Let's start the quiz.",
  icon: "success",
  iconColor: "#567257",
  background: "#D9D8D5",
  color: "#2A2420",
  confirmButtonText: "Continue",
  confirmButtonColor: "#896A58",
});

var questions = [
  {
    question:
      "Q1: What is the primary purpose of the const keyword in JavaScript?",
    opt1: "It prevents a variable's value from being re-assigned.",
    opt2: "It always makes a variable global.",
    opt3: "It can only be used for numbers.",
    opt4: "It can be declared without an initial value.",
    answer: "It prevents a variable's value from being re-assigned.",
  },
  {
    question:
      "Q2: Which array method adds a new element to the end of an array?",
    opt1: "pop()",
    opt2: "push()",
    opt3: "shift()",
    opt4: "unshift()",
    answer: "push()",
  },
  {
    question: "Q3: What is the difference between === and ==?",
    opt1: "They perform exactly the same function.",
    opt2: "=== checks both value and data type (Strict Equality).",
    opt3: "== only checks the data type.",
    opt4: "=== is only used for comparing numbers.",
    answer: "=== checks both value and data type (Strict Equality).",
  },
  {
    question:
      "Q4: Which of the following is the correct syntax for an Arrow Function?",
    opt1: "function => {}",
    opt2: "arrow() -> {}",
    opt3: "() => {}",
    opt4: "() => return {}",
    answer: "() => {}",
  },
  {
    question: "Q5: Which symbol is used for Template Literals?",
    opt1: 'Double Quotes ("")',
    opt2: "Single Quotes ('')",
    opt3: "Backticks (`)",
    opt4: "Hashtag (#)",
    answer: "Backticks (`)",
  },
  {
    question: "Q6: What does the map() method return?",
    opt1: "Only true or false.",
    opt2: "A new array with the results of calling a function on every element.",
    opt3: "The total length of the array.",
    opt4: "Only the first element of the array.",
    answer:
      "A new array with the results of calling a function on every element.",
  },
  {
    question:
      "Q7: Which ES6 feature is used to extract data from objects into distinct variables?",
    opt1: "Spread Operator",
    opt2: "Destructuring",
    opt3: "Hoisting",
    opt4: "Prototyping",
    answer: "Destructuring",
  },
  {
    question: "Q8: What does JSON stand for?",
    opt1: "Java Standard Object Notation",
    opt2: "Java Serialized Object Network",
    opt3: "JavaScript Online Node",
    opt4: "JavaScript Object Notation",
    answer: "JavaScript Object Notation",
  },
  {
    question: "Q9: What are Async/Await used for in JavaScript?",
    opt1: "Handling Promises and asynchronous code more cleanly.",
    opt2: "Handling CSS Animations.",
    opt3: "Selecting HTML Elements.",
    opt4: "Speeding up standard for loops.",
    answer: "Handling Promises and asynchronous code more cleanly.",
  },
  {
    question: "Q10: Which of these is NOT a primitive data type in JavaScript?",
    opt1: "String",
    opt2: "Boolean",
    opt3: "Array",
    opt4: "undefined",
    answer: "Array",
  },
];

function displyaQuestions() {
  document.getElementById("display").style.display = "block";
  document.getElementById("display").innerHTML = `<div id="quizContainer">
                <div class="mb-4">
                    <div class="d-flex justify-content-between small fw-bold mb-2 text-white">
                        <span>Question <span id="currentQ">1</span> of 10</span>
                        <span>Keep going!</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" style="width: 10%"></div>
                    </div>
                </div>

                <div class="quiz-card mb-4" id="displayArea">
                    <h3 class="fw-bold mb-4">${questions[qIndex].question}</h3>
                    <div class="options-group">
                        <label class="option-label">
                            <input type="radio" name="option" class="d-none" value="${questions[qIndex].opt1}">
                            <span>${questions[qIndex].opt1}</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="option" class="d-none" value="${questions[qIndex].opt2}">
                            <span>${questions[qIndex].opt2}</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="option" class="d-none" value="${questions[qIndex].opt3}">
                            <span>${questions[qIndex].opt3}</span>
                        </label>
                        <label class="option-label">
                            <input type="radio" name="option" class="d-none" value="${questions[qIndex].opt4}">
                            <span>${questions[qIndex].opt4}</span>
                        </label>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <button class="btn btn-light btn-nav" onclick="previousQ()"><i class="fa-solid fa-chevron-left me-2"></i> Previous</button>
                    <button class="btn btn-primary btn-nav text-white" onclick="nextQ()">Next <i class="fa-solid fa-chevron-right ms-2"></i></button>
                </div>
            </div>`;
}
displyaQuestions();

function nextQ() {
  var tickOpt = document.querySelector("input[name = 'option']:checked");
  if (!tickOpt) {
    Swal.fire({
      title: "Wait a moment!",
      text: "Please select an answer before moving to the next question.",
      icon: "warning",
      iconColor: "#896A58",
      background: "#D9D8D5",
      color: "#2A2420",
      confirmButtonText: "Got it!",
      confirmButtonColor: "#567257", 
    });
    return;
  } else {
    answersArr[qIndex] = tickOpt.value;
  }
  console.log(answersArr,tickOpt.value);
  
  if (qIndex < questions.length - 1) {
    qIndex++;
    displyaQuestions();
  } else {
    document.getElementById("display").style.display = "none";
    document.getElementById("submitScreen").style.display = "block";

    document.getElementById("submitScreen").innerHTML = `<div class="quiz-card">
                    <i class="fa-solid fa-circle-check fa-4x mb-4" style="color: var(--btn-brown);"></i>
                    <h2 class="fw-bold">All Done!</h2>
                    <p class="text-secondary">You have answered all questions. Ready to see the results?</p>
                    <div class="mt-4">
                        <button class="btn btn-light me-2 btn-nav" onclick="goBack()">Go Back</button>
                        <button class="btn btn-success btn-nav text-white" onclick="submitQuize()">Show My Result</button>
                    </div>
                </div>`;
  }
}
function previousQ() {
  if (qIndex > 0) {
    qIndex--;
    displyaQuestions();
  } else {
    Swal.fire({
      title: "Start of Quiz!",
      text: "This is the very first question. You can't go back further.",
      icon: "info",
      iconColor: "#567257",
      background: "#D9D8D5",
      color: "#2A2420",
      confirmButtonText: "I'll Move Forward",
      confirmButtonColor: "#896A58",
    });
  }
}

function goBack() {
  document.getElementById("display").style.display = "block";
  displyaQuestions();
  document.getElementById("submitScreen").style.display = "none";
}

function submitQuize() {
  score = 0;
  for(var i = 0 ; i < answersArr.length ; i++){
    if(answersArr[i] === questions[i].answer){
      score++
    }
  }
  var percentage = (score / questions.length )*100
  console.log(score,percentage,questions.length);
  

  document.getElementById("submitScreen").style.display = "none";
  document.getElementById("resultScreen").innerHTML = `<div class="quiz-card">
                    <h5 class="text-uppercase tracking-wider text-secondary fw-bold">Your Performance</h5>
                    <h1 class="display-1 fw-bold text-primary mt-3" id="percValue">${percentage}%</h1>
                    <p class="lead fw-medium" id="scoreText">You scored ${score} out of ${questions.length} ${storeName}</p>
                    <hr class="my-4 mx-auto w-25" style="border-top: 2px solid var(--accent-sage);">
                    <button class="btn btn-primary btn-nav px-5 text-white" onclick="location.reload()">Retake Quiz</button>
                </div>`;
}

function logout() {
  window.location.href = "index.html";
}
