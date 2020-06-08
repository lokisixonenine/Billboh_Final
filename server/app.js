const express = require("express");
const path = require("path");
const logger = require("morgan");

const app = express();
app.set("port", process.env.PORT || 3001);
app.use(logger("dev"));
app.use(express.json());

//routes configured here
require('./routes/authRoutes')(app)
require('./routes/apiRoutes')(app)

// Serve static assets in production only
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

module.exports = { app };
