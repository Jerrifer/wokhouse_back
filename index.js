require("dotenv").config();

const express = require("express");
const app = express();
const conectarDB = require("./config/connection");
const dotenv = require("dotenv");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(cors());
dotenv.config();
app.use(express.json());

app.use("/api", require("./src/routes"));

conectarDB();

app.listen(PORT, (err) => {
  if (err) {
    console.log(`server error: ${err.message}`);
  } else {
    console.log(`server is running on port ${PORT}`);
  }
});
