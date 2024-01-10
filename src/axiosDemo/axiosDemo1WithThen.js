const axios = require("axios").default;

function mainTask() {
    const url = "https://jsonplaceholder.typicode.com/users/1"; //or https://swapi.dev/api/people/1
    const resultingPromise = axios.get(url);
    console.log("Asked axios to get " + url);
    resultingPromise.then(handleCompletedPromise);
}

function handleCompletedPromise(result) {
    console.log("Promise completed");
    console.log("The result was an object including ");
    console.log(".status: ", result.status);
    console.log(".data: ", result.data);
}

mainTask();

console.log("after mainTask()");
