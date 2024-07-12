function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get user answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Feedback element
    const feedback = document.getElementById('feedback');

    // Check if an answer is selected
    if (userAnswer) {
        // Compare the user's answer to the correct answer
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
