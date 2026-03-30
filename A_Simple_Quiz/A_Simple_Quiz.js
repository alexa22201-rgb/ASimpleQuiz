const questions = [
{
question: "What is the capital of France?",
options: ["Paris", "London", "Berlin", "Madrid"],
answer: 0
},
{
question: "Which programming language are we learning?",
options: ["Python", "Java", "JavaScript", "C++"],
answer: 2
},
{
question: "Who is teaching this course?",
options: ["K.B.", "A.B.C", "X.Y.Z", "7001"],
answer: 0
}
];
let i = 0;
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