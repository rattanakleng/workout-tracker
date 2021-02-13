// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Create port for heroku and local
const PORT = process.env.PORT || 3000;

// // Path using all files in model folders

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Mongoose connect database
mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
});

// routes
app.use(require("./routes/htmlRoutes.js"));
app.use(require("./routes/apiRoutes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})


