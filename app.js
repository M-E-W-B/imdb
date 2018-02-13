const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const router = express.Router();
const config = require("./config");
const port = process.env.PORT || 8080;

mongoose.connect(config.database, config.options, err => {
  console.log("Connected to mongodb.");
});

mongoose.Promise = global.Promise;

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride("X-HTTP-Method-Override")); // simulate PUT and DELETE
app.use("/api/v1", router);

require("./routes/unauthenticated")(router);
require("./middlewares")(router);
require("./routes")(router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.json({ message: err.message });
});

app.listen(port, () => console.log(`Server running @ ${port}`));
