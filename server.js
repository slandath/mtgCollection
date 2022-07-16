const express = require("express");
const cardRoutes = require('./src/routes');
const app = express();
const port = 3000;
const pool = require("./db"); // Use Postgres db

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use('/api/v1/cards', cardRoutes);

app.listen(port, () => console.log(`app is listening on port ${port}`));


