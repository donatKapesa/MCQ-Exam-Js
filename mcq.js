var numberOfQuestions = 5;
var choicesPerQuestion = 5;

var questionNumber = document.getElementsByClassName("questionNumber");

var question = document.getElementsByClassName("question");

var answers = document.getElementsByClassName("answers");

var answer_A = document.getElementsByClassName("answer_A");

var answer_B = document.getElementsByClassName("answer_B");

var answer_C = document.getElementsByClassName("answer_C");

var answer_D = document.getElementsByClassName("answer_D");

var answer_E = document.getElementsByClassName("answer_E");


var submit = document.getElementById("submit");

// Answer key

var answerKey = [21, 3, "Nani", "Kevin Durant", "Russ"];

var userAnswerArray = new Array(5);


// Put every single possible clickable answer in 5x5 array

// clicking an answer changes its background and color

var individual_answers = new Array(numberOfQuestions);


for(let i=0; i<numberOfQuestions; i++) {
	individual_answers[i] = new Array(choicesPerQuestion);
}


// Adding Event listeners to each answer choice

for (let i = 0; i < answers.length; i++) {
	specificAnswers = answers[i].getElementsByTagName("li"); // answers to each questions e.g. answers to qu.1, then qu.2

	for (let j = 0; j < specificAnswers.length; j++) {
		individual_answers[i][j] = specificAnswers[j]; // individual answers to each qu.
		var spanX = individual_answers[i][j].getElementsByTagName("span"); // did not use this
		individual_answers[i][j].addEventListener("click", click(i , j));
	}

}

function click(i, j) {
	return function() {
		console.log(individual_answers[i][j].innerText);

		if(individual_answers[i][j].style.background != "black") { // if it's not black, set all to white, then put specific one to black

			for(let x=0; x<choicesPerQuestion; x++) {
				individual_answers[i][x].style.cssText = "background: white";
				individual_answers[i][x].getElementsByTagName("span")[0].style.color = "black";
			}
			individual_answers[i][j].style.cssText = "background: black";
			individual_answers[i][j].style.color = "green";
			individual_answers[i][j].getElementsByTagName("span")[0].style.color = "white";

			userAnswerArray[i] = individual_answers[i][j].innerText; 
			// i = question number, j = specific answer to question number i
			// So on each click, if answer originally doesn't have a black background, add it to userArray

		}
		else { // If background is black, on click you have to remove that from individual array
			individual_answers[i][j].style.cssText = "background: white";
			individual_answers[i][j].getElementsByTagName("span")[0].style.color = "black";
			userAnswerArray.splice(i, 1);
		}

	}
}

// Adding event listener to submit button
submit.addEventListener("click", score);

/* Easiest thing to do would be to make an "Answer class" for each answer. (using prototypes) with field selected.
Then count the number of answers with fields selected and compare with answer key or smthn. Try this as an exercise for later, maybe ReactJs */

/* For now I will create an array for the answers that will change as the user clicks and use the actual words to see if they match */

function score() {
	/* Add a check later to see if he has answered every question or at least 60% */

	var counter = 0;

	for(let x=0; x<numberOfQuestions; x++) {
		if(answerKey[x] == userAnswerArray[x]) {
			counter++;
		}
	}

console.log("User has submitted the quiz and scored " + counter);

if(counter < 3) {
	alert("Try again, you failed");
}

else {
	alert("Are you a lizard?")
}

/* Show on a message and ask to retake*/

}
