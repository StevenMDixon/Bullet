const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001; 

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

// Start the server
const server = app.listen(PORT, function() {
    console.log(`Server running on port ${PORT}.`);
});