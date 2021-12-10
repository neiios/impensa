const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

// middleware

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

// routes
app.use("/dashboard", require("./routes/dashboard"));

app.use("/auth", require("./routes/jwtAuth"));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
