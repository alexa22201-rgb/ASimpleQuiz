const questions = [
{
question: "What is the capital of France?",
options: ["Albany", "Paris", "London", "Berlin", "Madrid"],
answer: 1
},
{
question: "Which programming language are we learning?",
options: ["B++", "Python", "Java", "JavaScript", "C++"],
answer: 3
},
{
question: "Who is teaching this course?",
options: ["D.C.", "K.B.", "A.B.C", "X.Y.Z", "7001"],
answer: 1
},
{
question: "Which of the following is used to style a webpage?",
options: ["C++", "HTML", "CSS", "JavaScript", "Python"],
answer: 2
}
];let i = 0;
let score = 0;
const q = document.getElementById("question");
const buttons = document.querySelectorAll(".option");
const scoreBox = document.getElementById("score");
loadQuestion();
function loadQuestion() {
q.textContent = questions[i].question;
  buttons[0].textContent = questions[i].options[0];
  buttons[1].textContent = questions[i].options[1];
  buttons[2].textContent = questions[i].options[2];
  buttons[3].textContent = questions[i].options[3];
  buttons[4].textContent = questions[i].options[4];
}
function evaluateAnswer(event) {
const chosen = Number(event.target.dataset.index);
if (chosen === questions[i].answer) {
score++;
}
scoreBox.textContent = "Score: " + score;
i++;
if (i < questions.length) {
loadQuestion();
} else {
q.textContent = "Quiz Finished!";
scoreBox.textContent = "Final Score: " + score;
document.getElementById("options").style.display = "none";
}
}
buttons[0].addEventListener("click", evaluateAnswer);
buttons[1].addEventListener("click", evaluateAnswer);
buttons[2].addEventListener("click", evaluateAnswer);
buttons[3].addEventListener("click", evaluateAnswer);
buttons[4].addEventListener("click", evaluateAnswer);