// when the quiz is over (time up OR user submitted quiz), display total correct, incorrect, and unanswered
var secondsRemaining = 04;
var intervalId;
var wrongcount;
var unanswered;
var userAnswer =
    $("input[name='q1']:checked").val();
var correctAnswerCount = 0;





$(document).ready(function () {
    // Here we use jQuery to select the header with "click-me" as its ID.
    // Notice I have the #click-me, click, and then the function
    // So $("#id|.class|element").on("action", function(){});
    // And so whenever it is clicked...
    var clickCount = 0
    if (userAnswer === true) {
    correctAnswerCount++;
    $(".correct").html(correctAnswerCount);
}

    $("#submit-btn").on("click", function (e) {
        e.preventDefault();
        var q1Val = $("input[name='q1']:checked").val();
        alert(q1Val);
    });

    $('#click-me').on('click', function () {
        console.log("i've been clicked")
        clickCount++
    })
})

function run() {
    //Asnwer below first line of code
    intervalId = setInterval(decrement, 4000);
    //
}

function decrement() {

    $("#timerem").html(secondsRemaining);
    secondsRemaining--;



    if (secondsRemaining === 0) {

        clearInterval(intervalId)
        alert("Time Up!");
        // display corrects, wrongs and unanswered questions
    }
}

run();
// if the itme reaches 0 finish game
// create variables for total correct, incorrect, and unanswered totals
// get the user's choices for each question (FOR loop)
    // compare the user's choice to the correct answer
    // IF the choice is correct
        // add 1 to total correct
    // ELSE IF the choice is incorrect
        // add 1 to total incorrect
    // ELSE
        // add 1 to unanswered total

