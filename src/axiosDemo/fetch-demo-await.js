const axios = require("axios");

async function mainTask() {
    const result = await axios.get("https://swapi.dev/api/people/1");
    console.log("fetch completed");
    console.log("The result was an object with .status and .data as follows: ");
    console.log(result.status);
    console.log(result.data.name);
}

mainTask();
