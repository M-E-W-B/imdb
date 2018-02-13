const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const config = require("./config");
const { MongooseConnect } = require("./utils");

const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride("X-HTTP-Method-Override")); // simulate PUT and DELETE
app.use("/api/v1", router);

require("./routes/unauthenticated")(router);

if (process.env.NODE_ENV !== "test") require("./middlewares")(router);

require("./routes")(router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.json({ message: err.message });
});

MongooseConnect.open().then(() => {
  app.listen(port, () => console.log(`Server running @ ${port}`));
});

module.exports = app;
