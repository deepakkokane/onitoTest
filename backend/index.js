const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");

const userRoutes = require("./routes/user");

app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);

mongoose
  .connect("mongodb://localhost:27017/onitoDB", {})
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
