const express = require("express");
const cardRoutes = require("./src/routes");
const app = express();
const port = 3000;
const pool = require("./db"); // Use Postgres db

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/cards", cardRoutes);

app.listen(port, () => console.log(`app is listening on port ${port}`));
