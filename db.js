const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Password1!",
    database: "mtg",
    host: "mtg-cloud.cnwrks7c6kq7.us-east-1.rds.amazonaws.com",
    port: 5432

});

module.exports = pool;