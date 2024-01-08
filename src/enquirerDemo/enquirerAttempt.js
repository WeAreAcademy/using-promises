const { prompt } = require("enquirer");

prompt({
    type: "input",
    message: "What is your favourite colour?",
    name: "faveColour",
});
