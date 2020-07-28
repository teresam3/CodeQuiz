// variables to select html ids
var getStarted = document.getElementById("start-btn")
var questionBox = document.getElementById('quiz-box') //selects entire box of quix (answers & questions)
var question = document.getElementById("questions") //selects individual question div 
var choicesBox = document.getElementById('answers-btn') //selects div where answers live
var button = document.getElementById('btn') //see line 62
var counter = 0
var countDown
var choiceButton
//set of questions
var questionArray = [
    {
        question: "What is NOT an element of HTML?", 
        choices: ["body", "head", "h1", ".getQuerySelector()" ],
        answer: 3
    },
    {
        question: "What brackets are used for arrays?", 
        choices: ["<>", "{}", "[]", "()" ],
        answer: 2
    },
    {
        question: "What does HTML stand for?", 
        choices: ["hypertext markup language", "hypertest markup letters", "hot tamale", "how to make letters" ],
        answer: 0
    },
    {
        question: "What is CSS used for?", 
        choices: ["styling the page", "making page responsive", "creating the outline of page", "add to github" ],
        answer: 0
    },
    {
        question: "What is NOT a possible header?", 
        choices: ["h5", "h7", "h1", "h2" ],
        answer: 2
    },
]
//click events
getStarted.addEventListener("click", startGame)

//to initiate quiz after user clicks start
function startGame() {
    console.log('play!')
    getStarted.classList.add('hide')
    questionBox.classList.remove('hide')
    questionBox.classList.add('display')
    showQuestion()
}

//to show the question on click then adds onto page
function showQuestion() {
    console.log(questionArray[counter])
    question.append(questionArray[counter].question)
//goes through the questionArray to display answers into choiceButton 
    for (var i = 0; i < questionArray[counter].choices.length; i++){
        console.log(questionArray[counter].choices[i])
//creates/adds button of the choices into html of 1 question
        var choiceButton = document.createElement("button")
        choiceButton.setAttribute("id", "btn")
        choiceButton.setAttribute("value", i)
        choiceButton.classList.add("btn")
        choiceButton.innerText = questionArray[counter].choices[i]
        choicesBox.append(choiceButton)
        choiceButton.onclick = checkAnswer
    }
}

//checks the answer clicked by the correct answer to see right/wrong
function checkAnswer(event) {
    var selectedAnswer = parseInt(event.target.value)
    if (selectedAnswer === questionArray[counter].answer) {
        selectAnswer()
    }
    else {
        console.log('Incorrect answer try again')
    }
}

//goes to next question once correct answer is clicked
function selectAnswer() {
    counter++
    function removeQuestion() {
        question.innerHTML = ""
        choicesBox.innerHTML = ""
     }
    removeQuestion()
    showQuestion()
}

// function timer () {

// }

// function gameOver() {

// }

// function saveGame() {

// }