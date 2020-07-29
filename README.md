# CodeQuiz 

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

GIVEN I am taking a code quiz // 
WHEN I click the start button // fcn for it to start 
THEN a timer starts and I am presented with a question //fcn for a counter
WHEN I answer a question //create arrays for the questions
THEN I am presented with another question 
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

##  Process
    First, I created the basic html which gave the code quiz a basic structure for the window browser. I added div and a header a basic outline as where the questions will go and answers will go. 
    Then, I added classes and ids to be used later for styling and adding javascript.

    Next, I styled the page by using the classes. I used the main class to give the border to quiz as well as centering it and adding a font. The answers class was used to style what would buttons to click the possible answers. The btn class styles the buttons that were latered added with javascript. The btn:hover improves user experience by making the page interactive because it highlight the answer choices when the user's pointer is hovering over the choice. That was done for both all the answers and the start button which is at the beginning of the quiz. I also made the quiz hidden with CSS to initiate with javascript the quiz once it is clicked.

    Finally, came the long and tedious task of creating the javascript. First, I simply created variables that'll pick certain HTML elements based on their respective IDs. Then I created the questions using an array with all of the questions, answers, and possible choices. Then, I created the functions that'll hold the events for page. 
