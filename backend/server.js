const express = require("express");
const dotEnv = require("dotenv").config();
const mongoose = require("mongoose");

// cusotm modules
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// ----------- application middlewares --------
// parse incomming req body
app.use(express.json());

// ---------- end application middlewares ------

// ------------------ routes -------------------
// home routes
app.get("/", (req, res) => {
  res.send("application home page");
});

// user routes
app.use("/user", userRoutes);

// admin routes

// page not found
app.get("*", (req, res) => {
  res.send("page not found");
});

// ------------------ end routes ------------------

// connect to database and run server
mongoose.connect(process.env.DB_URL, (err) => {
  if (err) {
    console.log("Database Conection Error");
  } else {
    app.listen(process.env.DB_PORT, () => {
      console.log(`your server is running at ${process.env.DB_PORT}...`);
    });
  }
});
