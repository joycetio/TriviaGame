$(document).ready(function() {
	var questions = ["What is the state capital of Colorado?", "What is the state capital of Wyoming?", "What is California's state capital?", "What is Utah's state capital?", "What is Hawaii's state capital?", "What is Louisiana's state capital?", "What is Arkansas's state capital?", "What is the state capital of Texas?", "What is Alaska's state capital?", "What is New Mexico's state capital?"]; 

	var answers = ["Denver", "Cheyenne", "Sacramento", "Salt Lake City", "Honolulu", "Baton Rouge", "Little Rock", "Austin", "Juneau", "Santa Fe"]; 

	var multipleChoice = [
		["Springfield", "Columbus", "Denver", "Columbia"], 
		["Cheyenne", "Lansing", "Bismarck", "Augusta"], 
		["Albany", "Sacramento", "Honolulu", "Washington"], 
		["Columbus", "Charlestone", "Nashville", "Salt Lake City"], 
		["Helena", "Tallahassee", "Honolulu", "Providence"],
		["Jefferson City", "Baton Rouge", "Jackson", "Santa Fe"],
		["Little Rock", "Boston", "Concord", "Harrisburg"],
		["Salt Lake City", "Annapolis", "Carson City", "Austin"], 
		["Topeka", "Boise", "Juneau", "Jefferson City"], 
		["Santa Fe", "Montpelier", "Des Moines", "Indianapolis"]]; 

	var timer = 30; 
	var numCorrectAnswers = 0; 
	var numWrongAnswers = 0; 
	var blankAnswers = 0; 
	var numQ = 0; 
	var userAnswer;


	function initialDisplay() {
		var startScreen = "<a class='btn btn-primary btn-lg btn-block startBtn' href='#' role='button'>Start</a>";
		$("#mainContent").html(startScreen); 
	};

	initialDisplay();

	function startGame() {
		//displays the time remaining
		var timerHTML = "<h3>Time Remaining: <span class='time-counter'>30</span></h3>";

		//displays the question and multiple choices 
		var gameContent = "<h2>" + questions[numQ] + "</h2>"; 

		var choiceList = "<h2><button class='btn btn-primary btn-md userChoice' href='#'> A. " + multipleChoice[numQ][0] + "</button></h2>" + "<h2><button class='btn btn-primary btn-md userChoice' href='#'> B. " + multipleChoice[numQ][1] + "</button></h2>" + "<h2><button class='btn btn-primary btn-md userChoice' href='#'> C. " + multipleChoice[numQ][2] + "</button></h2>" + "<h2><button class='btn btn-primary btn-md userChoice' href='#'> D. " + multipleChoice[numQ][3] + "</button></h2>";

		// console.log(multipleChoice[numQ][0]);

		$("#mainContent").html(timerHTML);
		$("#mainContent").append(gameContent);
		$("#mainContent").append(choiceList);
	}; 

		$(".startBtn").on("click", function(event){
		console.log("i've been clicked.");

		event.preventDefault(); 

		startGame();
		setTimer();

	}); 


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

	// $("#mainContent").

	function setTimer(){
		clock = setInterval(numTime, 1000);

		function numTime(){
			if (timer === 0) {
				clearInterval(clock);
				// alert("Time's up! You lose!");
				timerEnds();
			}
			if (timer > 0) {
				timer--; 
			};

			$(".time-counter").html(timer);
		};
	}; 

	function nextQuestion(){
		if (numQ < 9){
			numQ++; 
			startGame();
			timer = 30; 
			setTimer();
		}
		else {
			gameResults();
			// alert("congratulations!")
		}
	}; 

	function youWin(){
		numCorrectAnswers++; 
		winMessage = "<h2> Good job! The answer is: " + answers[numQ] + "</h2>";

		$("#mainContent").html(winMessage);
		setTimeout(nextQuestion, 2000);
	}; 

	function youLose(){
		numWrongAnswers++; 
		loseMessage = "<h2> Sorry, the answer is: " + answers[numQ] + "</h2>";

		$("#mainContent").html(loseMessage);
		setTimeout(nextQuestion, 2000);
	}; 

	function timerEnds(){
		blankAnswers++;
		timeoutMessage = "<h2> You ran out of time! Correct answer: " + answers[numQ] + "</h2>"; 

		$("#mainContent").html(timeoutMessage);
		setTimeout(nextQuestion, 2000);
	}; 

	function gameResults(){

		results = "<h2> Correct Answers: " + numCorrectAnswers + "</h2><h2> Wrong Answers: " + numWrongAnswers + "</h2><h2> Unanswered Questions: " + blankAnswers + "</h2>";
		reset = "<h2><a class='btn btn-primary btn-lg btn-block resetBtn' href='#' role='button'>Take the Quiz Again</a></h2>";

		$("#mainContent").html(reset);
		$("#mainContent").append(results);
	};

	function restart(){
		numQ = 0; 
		numCorrectAnswers = 0;
		numWrongAnswers = 0; 
		blankAnswers = 0; 
		timer = 30;
		startGame();
		setTimer();
	};

	$("#mainContent").on("click", ".resetBtn", function(event){
		restart();
	});
});