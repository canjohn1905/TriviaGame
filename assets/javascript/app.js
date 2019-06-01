// when the quiz is over (time up OR user submitted quiz), display total correct, incorrect, and unanswered
var number = 30;
var intervalId;
var correct;
var wrong;
var unanswered;
var truearray = ["true",]

function run() {
    //Asnwer below first line of code
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 3000);
  }

  function decrement() {
    
    $("#timerem").html(number);
    number--;

    

    if (number === 0) {

      stop();

      alert("Time Up!");
    }
  }

run();

// create variables for total correct, incorrect, and unanswered totals
// get the user's choices for each question (FOR loop)
    // compare the user's choice to the correct answer
    // IF the choice is correct
        // add 1 to total correct
    // ELSE IF the choice is incorrect
        // add 1 to total incorrect
    // ELSE
        // add 1 to unanswered total

