// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Create port for heroku and local
const PORT = process.env.PORT || 3000;

// Path using all files in model folders
const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/workout", {
    userNewUrlParser: true
});


//Routes
//Api and HTML

app.listen(PORT, () => {
    console.log('App running on port ${PORT}!');
})


