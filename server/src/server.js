const express = require("express");
const connect = require("./config/db");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const studentDetailsController = require("./controller/studentDetails.controller");
app.use("/studentDetails", studentDetailsController);

const studentResultController = require("./controller/studentResult.controller");
app.use("/studentResults", studentResultController);

app.listen(PORT, async (req, res) => {
  await connect();
  console.log(`Server is running on Port ${PORT}...`);
});
