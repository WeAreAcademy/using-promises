const { Scale } = require("enquirer");

const scalePrompt = new Scale({
    name: "experience",
    message: "Please rate your experience",
    scale: [
        { name: "1", message: "Strongly Disagree" },
        { name: "2", message: "Disagree" },
        { name: "3", message: "Neutral" },
        { name: "4", message: "Agree" },
        { name: "5", message: "Strongly Agree" },
    ],
    margin: [0, 0, 2, 1],
    choices: [
        {
            name: "interface",
            message: "The website has a friendly interface.",
            initial: 2,
        },
        {
            name: "navigation",
            message: "The website is easy to navigate.",
            initial: 2,
        },
        {
            name: "images",
            message: "The website usually has good images.",
            initial: 2,
        },
        {
            name: "upload",
            message: "The website makes it easy to upload images.",
            initial: 2,
        },
        {
            name: "colors",
            message: "The website has a pleasing color palette.",
            initial: 2,
        },
    ],
});

const promiseOfInput = scalePrompt.run();

function handleInput(userInput) {
    console.log("Thanks!  Responses were: ", userInput);
    // sendEmailWithFeedback(userInput);
}

promiseOfInput.then(handleInput);
