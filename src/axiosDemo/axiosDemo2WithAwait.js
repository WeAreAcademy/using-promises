const axios = require("axios").default;

async function mainTask() {
    const result = await axios.get("https://swapi.dev/api/people/1");
    console.log("GET completed.  Result object includes: ");
    console.log(result.status);
    console.log(result.data.name);
}

mainTask();
