var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What's your name?");

console.log("Wellcome " + userName + " to DO YOU KNOW DILIP?");
console.log("NOTE*- to play this quize use small letters ")

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Right!");
    score = score + 1;

  } else {
    console.log("wrong!")
  }
  console.log("current score: " + score);
  console.log("=================")
}
var questions = [{
  question: "Where I live?",
  answer: "umaria"
},{
  question: "my favourite female singer is? 1.monali 2.shreya ",
  answer: "shreya"
},{
  question: "my favourite male singer is? 1.sonu nigam 2.arjit singh ",
  answer: "arjit singh"
},{
  question: "my favourite cricketr is? 1.virat kohli 2.rohit sharma ",
  answer: "virat kohli"
},{
  question: "my favourite footballer is? 1.leonal messi 2.cristiano ronaldo ",
  answer: "leonal messi"
},{
  question: "my favourite state is? 1.himachal 2.uttrakhand ",
  answer: "uttrakhand"
}             
  ]

for(var i = 0; i<questions.length; i++){
  var currentQuest = questions[i];
  play(currentQuest.question, currentQuest.answer)
}
console.log("your final score is " + score)
console.log("--------------------------------")
console.log("tell us about your marks so we can mention it here")
console.log("1.highest score is:6 by Stark")
