const axios = require("axios").default;

function mainTask() {
    const url = "https://jsonplaceholder.typicode.com/users/1"; //or https://swapi.dev/api/people/1

    const resultingPromise = axios.get(url);
    console.log("fetch started");
    resultingPromise.then(handleCompletedPromise);
}

function handleCompletedPromise(result) {
    console.log("promise completed");
    console.log("The result was an object with .status and .data as follows: ");
    console.log(result.status);
    console.log(result.data);
    console.log("fetch completed");
}

mainTask();
