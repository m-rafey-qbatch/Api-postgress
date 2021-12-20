const express = require("express");
const path = require("path");
const app = require("./route");
// Database
const db = require("./config/database");



// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Test DB
db.authenticate()
.then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
