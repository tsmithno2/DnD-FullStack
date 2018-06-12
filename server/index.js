require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const controllers = require("./controllers");s
const app = express();
const { CONNECTION_STRING, SERVER_PORT } = process.env;
const massive = require("massive");
app.use(bodyParser.json());
app.use(cors());
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.listen(SERVER_PORT, () =>
  console.log("Server is Listening " + SERVER_PORT)
);
