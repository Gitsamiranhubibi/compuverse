let saqAnswersByOrder = [
    "bit",
    "binary digit",
    "abacus",
    "alan turing",
    "transistors",
    "1947",
    "microprocessor",
    "intel 4004",
    "analytical engine",
    "ada lovelace",
    "1981",
    "1984"
];

let mcqAnswersByOrder = [
    "True/False",
    "Keyboard",
    "OS",
    "CPU",
    "Python",
    "Keyboard",
    "Monitor",
    "RAM",
    "Android",
    "Google",
    "URL",
    "Colossus"
];

document.addEventListener('DOMContentLoaded', function () {

    let saqQuestionsByOrder = document.querySelectorAll('#saq .question form');

    saqQuestionsByOrder.forEach(function (question, index) {
        let form = question;

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            let userInput = form.querySelector('input');
            let answer = userInput.value.trim().toLowerCase();           
            let result = form.querySelector('.result');

            if (answer) {
                if (answer === saqAnswersByOrder[index]) {
                    userInput.style.borderColor = 'green';
                    result.textContent = 'Correct!';
                    result.style.color = 'green';
                }
                else {
                    userInput.style.borderColor = 'red';
                    result.textContent = 'Incorrect!';
                    result.style.color = 'red';
                }
            }
            else {
                userInput.style.borderColor = 'orange';
                result.textContent = 'Input is empty!';
                result.style.color = 'orange';
            }
        });

        let revealButton = form.querySelector('.btn');
        let userInput = form.querySelector('input');

        revealButton.addEventListener('click', function() {
            if (revealButton.textContent === "Show") {
                userInput.value = `${saqAnswersByOrder[index]}`;
                userInput.style.color = 'grey';
                revealButton.textContent = 'Hide';
            }
            else {
                userInput.value = '';
                revealButton.textContent = 'Show';
            }
        });

    });

    let mcqQuestionsByOrder = document.querySelectorAll('#mcq .question > div');

    mcqQuestionsByOrder.forEach( function(question, index) {
        let buttons = question.querySelectorAll('button');
        let result = question.querySelector('.result');

        buttons.forEach( function(button) {
            button.addEventListener('click', function() {
                buttons.forEach( function(btn) {
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';
                    btn.style.color = '';
                });

                let correctAnswer = mcqAnswersByOrder[index];

                if (button.textContent === correctAnswer) {
                    button.style.backgroundColor = 'green';
                    result.textContent = 'Correct!';
                    result.style.color = 'green';
                }
                else {
                    button.style.backgroundColor = 'red';
                    result.textContent = 'Incorrect!';
                    result.style.color = 'red';
                }

                buttons.forEach( function(btn) {
                    if (btn !== button && btn.textContent !== correctAnswer) {
                        btn.style.color = 'red';
                        btn.style.borderColor = 'red';
                    }
                    if (btn.textContent === correctAnswer) {
                        btn.style.backgroundColor = 'green';
                    }
                });

            });
        });
    });
});