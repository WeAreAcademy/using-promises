function badLoop() {
    while (true) {
        askOneQuestion();
    }
}

function askOneQuestion() {
    promptUser.then(processEventualAnswer);
}
