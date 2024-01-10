const axios = require("axios").default;

const url = "https://swapi.dev/api/people/1";

const resultingPromise = axios.get(url);
