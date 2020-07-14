const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const path = require("path");

// Define express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static(__dirname + "/client/public"));

// Add cors so that frontend can talk to backend
app.use(cors());

// Send every other request to the React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
  
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });