// variables to select html ids
var getStarted = document.getElementById("start-btn")
var questionBox = document.getElementById('quiz-box') //selects entire box of quix (answers & questions)
var question = document.getElementById("questions") //selects individual question div 
var choicesBox = document.getElementById('answers-btn') //selects div where answers live
var button = document.getElementById('btn') //see line 62
var countDown = document.getElementById('timer')
var over = document.createElement("button")
var counter = 0
var secondsLeft = 60
var choiceButton
var timerInterval
//set of questions
var questionArray = [
    {
        questions: "What is NOT an element of HTML?", 
        choices: ["body", "head", "h1", ".getQuerySelector()" ],
        answer: 3
    },
    {
        questions: "What brackets are used for arrays?", 
        choices: ["<>", "{}", "[]", "()" ],
        answer: 2
    },
    {
        questions: "What does HTML stand for?", 
        choices: ["hypertext markup language", "hypertest markup letters", "hot tamale", "how to make letters" ],
        answer: 0
    },
    {
        questions: "What is CSS used for?", 
        choices: ["styling the page", "making page responsive", "creating the outline of page", "add to github" ],
        answer: 0
    },
    {
        questions: "What is NOT a header element?", 
        choices: ["h5", "h7", "h1", "h2" ],
        answer: 1
    },
]
//click events
getStarted.addEventListener('click', startGame)

//countDown.addEventListener('click', timer)
console.log(countDown)

//to initiate quiz after user clicks start
function startGame() {
    console.log('play!')
    getStarted.classList.add('hide')
    questionBox.classList.remove('hide')
    questionBox.classList.add('display')
    showQuestion()
    timer()
}
//to show the question on click then adds onto page
function showQuestion() {
    question.append(questionArray[counter].questions)
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
        secondsLeft = secondsLeft - 10
        // countDown.append(' Wrong Answer ')
        countDown.append(' -10 seconds')
    }
}

//goes to next question once correct answer is clicked
function selectAnswer() {
    counter++
    function removeQuestion() {
        question.innerHTML = ""
        choicesBox.innerHTML = ""
     }  
     removeQuestion ()
     showQuestion()
    }
    

    

function timer () {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    countDown.textContent = secondsLeft + " seconds left"; 
    if ((secondsLeft === 0) || (counter == 5)) {
        clearInterval(timerInterval)
        gameOver()
      }   
    // else (counter >= 5)
    //     gameOver()
}, (1000)    )
}

function gameOver() {
    var over = document.createElement("h1")
    over.setAttribute("id", "header")
    over.classList.add("h1")
    over.innerText = "Game Over"
    choicesBox.append(over)
    over.onclick = saveGame()

    }

function saveGame() {
    over.classList.add("hide")
    var form = document.createElement("form")
    var inputName = document.createElement("input")
    var submitBtn = document.createElement('button')
    
    inputName.setAttribute("placeholder", "Insert initials here")
    
    submitBtn.classList.add('btn')
    submitBtn.textContent = "Save"

    form.appendChild(inputName)
    form.appendChild(submitBtn)

    choicesBox.appendChild(form)

}
