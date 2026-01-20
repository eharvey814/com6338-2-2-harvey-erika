// Global array containing quiz questions
var questionsArr = [
    {
        question: "Harry Potter was born in Godric's Hollow.",
        answer: true
    },
    {
        question: "Hogwarts has five houses.",
        answer: false
    },
    {
        question: "Hermione Granger is known for her intelligence and love of books.",
        answer: true
    },
    {
        question: "Voldemort is Harry Potter's Godfather.",
        answer: false
    },
    {
        question: "The spell 'Expelliarmus' is used to disarm an opponent.",
        answer: true
    }
];

// runQuiz function
function runQuiz() {
    var correctCount = 0;

    // Loop through each question
    for (var i = 0; i < questionsArr.length; i++) {
        var userAnswer = confirm(questionsArr[i].question);

        // Compare user's answer to correct answer
        if (userAnswer === questionsArr[i].answer) {
            correctCount++;
        }
    }

    // Calculate percentage score
    var scorePercentage = Math.round(
        (correctCount / questionsArr.length) * 100
    );

    // Display final score
    alert("You scored " + scorePercentage + "% on the Harry Potter Quiz!");
}
