const { Confirm, NumberPrompt } = require("enquirer");

async function mainLoop() {
    let wantToQuit = false;
    while (!wantToQuit) {
        const guessedCorrectly = await askOneQuestion();
        await storeAttemptInDB(guessedCorrectly);
        wantToQuit = await offerQuitOption();
    }
}

async function askOneQuestion() {
    const numToGuess = 1 + Math.round(Math.random() * 3);

    const inputNum = await new NumberPrompt({
        name: "guessedNumber",
        message: "Guess a number between 1 and 3",
    }).run();

    const guess = parseInt(inputNum);
    const guessedCorrectly = numToGuess === guess;
    if (guessedCorrectly) {
        console.log("correct");
    } else {
        console.log("Incorrect.  I was thinking of " + numToGuess);
    }

    return guessedCorrectly;
}

async function storeAttemptInDB(attemptInfo) {
    //do db insert here
}

async function offerQuitOption() {
    const confirmPrompt = new Confirm({
        name: "wantToStop",
        message: "Want to stop?",
    });
    const result = await confirmPrompt.run();
    return result;
}

mainLoop();
