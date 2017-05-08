# HW-TriviaGame
## Description on how to use the app: 
Click the Start button to begin the trivia quiz. Click on the correct answer before time runs out. 

## Requirements: (Advanced Assignment)
* Create a trivia game that shows only one question until the player answers it or their time runs out. 
* If the player's choice is correct, show a screen congratulating them for choosing the right option. After a few seconds, display the next question without the user input. 
* Do the same for wrong answers and time-outs. Make sure to display the correct answer. 
* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game. 

## Technologies Used: 
* HTML 
* CSS/Bootstrap 
* JavaScript/jQuery

## Code Explanation: 
* Using mostly JS to add content to the HTMl enabling me to manipulate the display screen better, I created a multiple functions that performs different functions necessary for the game to work. 
* I had trouble with the on-click function for the multipleChoice. The problem was that even if the user clicks the correct answer, instead of running the youWin function, it ran youLose function for every button. Using console.log, I realized that it was showing the array, instead of the answer I wanted. Using the .text() to get the answer, and the .slice() to extract the answer that matched what was inside the var answers array, I was able to fix the problem.
````
$("#mainContent").on("click", ".userChoice", function(event){
        console.log("you clicked me");
        var userAnswer = $(this).text();
        userAnswer = userAnswer.slice(4);

        console.log(userAnswer);
        if (userAnswer === answers[numQ]) {
            clearInterval(clock); 
            youWin();
        }
        else {
            clearInterval(clock);
            youLose();
        }
    });
````

# Live Link: 
https://joycetio.github.io/TriviaGame
