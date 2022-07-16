const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Password1!",
    database: "mtg",
    host: "localhost",
    port: 5432

});

module.exports = pool;