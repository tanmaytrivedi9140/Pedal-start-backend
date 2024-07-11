const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.get('/' , (req , res)=>{
    res.send("Hello World")
})
// Routes
app.use("/api/tasks", taskRoutes);

// MongoDB connection
mongoose
  .connect(
    process.env.URL
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
