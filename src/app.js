const express = require("express");
const bodyParser = require("body-parser");
const applyRoutes = require("./route/index.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
applyRoutes(app);

global.users = [];

app.listen(7777, () => {
  console.log(`Server started with http://127.0.0.1:${7777}`)
})