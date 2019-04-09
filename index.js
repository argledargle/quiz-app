//There should be a DATA constant that holsd an arra of objeccts of
    //all of the quiz questions. Each question should contain the following:
    //questionNumber, array of answers, correctAnswer, and additional info

const   questionArray = [
    {
        question: `How many cold calls, on average, does it take to get a prospect on the line?`,
        answers: [`95`, `80`, `100`, `110`],
        correctAnswer: 2,
        additionalInfo: `Although individual results may vary, it is widely accepted that it takes 100 calls to reach one person and it takes 10 people before you get to your first yes.`
    },
    {
        question: `Fill in the blank: A sell sheet is a specific type of _____.`,
        answers: [`Onboarding material`, `Sales collateral`, `Lead generation tool`, `White paper`],
        correctAnswer: 1,
        additionalInfo: `All of these items are tools used in sales, but sales collateral is the specific category that sell sheet belongs in.`
    },
    {
        question: `White papers are typically used at which stage of the sales cycle?`,
        answers: [`Lead generation`, `Closing the deal`, `Follow-up after the deal`, `Negotiation tool`],
        correctAnswer: 0,
        additionalInfo: `White papers are often used to share expertise and knowledge. They're often gated behind an email form, making them excellent lead gen tools.`
    },
    {
        question: `In order for sales and marketing to succeed, they should have the same ____.`,
        answers: [`Incentive plan`, `Goals`, `Equipment`, `Tranining`],
        correctAnswer: 1,
        additionalInfo: `3 of these items will be specialized to the specific role of sales/marketing. However, the only overlap for a succesful team should be goals.`
    },
    {
        question: `Sales and ____ alignment is critical to grow the business.`,
        answers: [`Product`, `Support`, `Marketing`, `Finance`],
        correctAnswer: 2,
        additionalInfo: `It's a best practice to have all of these departments in alignment - however - only sales and marketing alignment are critical for business success.`
    },
    {
        question: `A very common phrase in sales and marketing is “The money is in the ____.”`,
        answers: [`Lead generation technique`, `Follow-up`, `Email signature`, `Closing negotiations`],
        correctAnswer: 1,
        additionalInfo: `"The money is in the follow-up" is an age-old sales saying that encourages sales reps to always follow-up on leads.`
    },
    {
        question: `What is a piece of data that holds key information about your target buyer?`,
        answers: [`A sales persona.`, `A prospect.`, `A buyer persona`, `A sales report`],
        correctAnswer: 2,
        additionalInfo: `These are very similar concepts, however, this particular item we're referring to is a buyer persona.`
    },
    {
        question: `What is the term used by sales and marketing teams to divide between business sizes and verticals?`,
        answers: [`Marketing plan`, `Sales strategy`, `Go-to-market strategy`, `Market segment`],
        correctAnswer: 4,
        additionalInfo: `Although these other items are taken into consideration in the sales cylce, the market segment refers to specific groups divided by size and vertical.`
    },
    {
        question: `What is the type of lead that is generated solely by the sales rep with no influence from marketing?`,
        answers: [`Cold lead`, `Hot lead`, `Warm lead`, `Auto-lead`],
        correctAnswer: 0,
        additionalInfo: `The lead was never heaetd up from marketig or pre-sales activity, so it is considered a cold lead.`
    },
    {
        question: `This term refers to any and all items that get distributed by the marketing team to prospects through various campaigns.`,
        answers: [`Collateral`, `Material`, `Content`, `Tactic`],
        correctAnswer: 3,
        additionalInfo: `Sales collateral, marketing materials, and blog content are all examples of different types of tactics.`
    }
];

let questionNumber = 0;
let correctQuestions = 0;
let numberOfQuestions = questionArray.length

//we need to be able to load the questions into the DOM
function loadQuestion() {
    $('#question').text(questionArray[questionNumber].question);
    $('#choices').empty();
    let totalNumberOfChoices = questionArray[questionNumber].answers.length;
    for (i=0; i<questionArray[questionNumber].answers.length; i++) {
        let eachChoice = $("<input type='radio' class='option' name='option' id =\""+questionArray[questionNumber].answers[i]+" \" value=" + i + ">" + questionArray[questionNumber].answers[i] + "<br>");
        $('#choices').append(eachChoice);
    };
    $("#questionNumberDisplay").text("Question " + (questionNumber +1)  + " of " + numberOfQuestions);
}

//Users should be able to click a start button to begin the quiz, this
    //start button should clear the screen of all content and then start with the first question
$(document).ready(function () {
    $('.quiz-section').hide()
    $('.results').hide()
    $('#start-button').click(function () {
        $('.results').hide();
        $('.start-section').hide();
        $('.quiz-section').show();
        $('#result-message').empty();
        loadQuestion()
    })
    //functionality for when a option is clicked
    $('.quiz-section').on('click', '.option', function () {
        let userAnswer = $("input[class='option']:checked").val();
        let correctAnswer = questionArray[questionNumber].correctAnswer;
        if (userAnswer == correctAnswer) {
            correctQuestions++;
            console.log(correctQuestions); //this is a little debugger for me.
        };
        //add the question and the info to the results page
        $('#result-message').append("<h3>Question " + (questionNumber +1) + ": " + questionArray[questionNumber].question + "</h3>");
        $('#result-message').append("<h4>Answer: " + questionArray[questionNumber].additionalInfo);
        //if the quiz is done fill out the final score, show the results, and hide the quiz.
        //if the quiz isn't done, then advance to the next question.
        if ((questionNumber + 1 ) == numberOfQuestions) {
            $(".final-score").text(correctQuestions + " out of " + numberOfQuestions);
            $(".quiz-section").hide();
            $(".results").show();
        } else {
            questionNumber++;
            loadQuestion();
        }
    });
});