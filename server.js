const express = require("express");
const dotenv = require("dotenv");
const data = require("./data");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json(data).status(200);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING AT ${PORT}`);
});
