const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// mongoose
//   .connect("mongodb://mongo:27017/ecommerce", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"));

mongoose.connect("mongodb://mongo:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB"));
  
app.get("/", (req, res) => {
  res.send("E-Commerce API is running 🚀");
});

app.listen(5000, () => console.log("Server running on port 5000"));

