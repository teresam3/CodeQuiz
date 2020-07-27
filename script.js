var getStarted = document.getElementById("start-btn")
var questionBox = document.getElementById('quiz-box')
var counter = 0
var question = document.getElementById("questions")
var choicesBox = document.getElementById('answers-btn')
var button = document.getElementById('btn')
var questionArray = [
    {
        question: "Is the sky blue?", 
        choices: ["true", "false", "red", "orange" ],
        answer: 0
    },
    {
        question: "Is the bread blue?", 
        choices: ["true", "false", "red", "orange" ],
        answer: 2
    },
    {
        question: "Is the orange blue?", 
        choices: ["true", "false", "red", "orange" ],
        answer: 1
    }
]
 
//choices[answer]

getStarted.addEventListener("click", startGame)
document.addEventListener("click", button, selectAnswer)


function startGame() {
    console.log('started')
    getStarted.classList.add('hide')
    questionBox.classList.remove('hide')
    questionBox.classList.add('display')
    nextQuestion()
}

function nextQuestion() {
    console.log(questionArray[counter])
    question.append(questionArray[counter].question)
    
    for (var i = 0; i < questionArray[counter].choices.length; i++){
        console.log(questionArray[counter].choices[i])
        var choiceButton = document.createElement("button")
        choiceButton.setAttribute("id", "btn")
        choiceButton.setAttribute("value", i)
        choiceButton.classList.add("btn")
        choiceButton.innerText = questionArray[counter].choices[i]
        choicesBox.append(choiceButton)
    }
}

function selectAnswer() {
    counter++
    nextQuestion()
}

