const express = require("express");
const session = require('express-session');
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001; 

//app.use(require('body-parser').urlencoded({ extended: true }));
app.use(session({ secret: '23orj2o!4434~#@W', resave: true, saveUninitialized: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
}

if(process.env.NODE_ENV === "production"){
    app.use(function(req, res) {
      res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}

// Routes are broken out in route folder
app.use(routes);

// Start the server
const server = app.listen(PORT, function() {
    console.log(`Server running on port ${PORT}.`);
});