const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api/router");
const app = express();
const PORT = process.env.PORT || 3001;
const db = process.env.MONGODB_URI || "mongodb://localhost/HermesDataBase"
const path = require("path")

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join("public/")))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Api Routes
app.use(routes);

mongoose.connect(db, { useNewUrlParser: true }, (err) => { if (err) { throw err } console.log('mongoose connected') });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT http://localhost:${PORT} !`);
});
