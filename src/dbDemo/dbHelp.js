const { Pool } = require("pg");

//Makes a pool of connections to our database.
//(Understanding the details is not important here.)
function makeDBConnectionPool(dbName) {
    return new Pool({
        database: dbName,
    });
}

module.exports = { makeDBConnectionPool };
