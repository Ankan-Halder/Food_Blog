const express = require("express");
const app = express();
const PORT = 5000;

//connecting to routes
const product_routes = require("../backend/routes/products");

//connecting to database
const connectdb = require("../backend/db/connect");

const cors = require("cors");

app.use(cors());

// Basic Server Setup
app.get("/", (req, res) => {
  res.send("Food Blog Backend Home!!!");
});

app.use(express.json());

//Redirect to the routes
app.use("/details", product_routes);

// Making function call listening to the server
const start = async () => {
  try {
    await connectdb();
    app.listen(PORT, () => {
      console.log(`Connected to the Server on port no ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

// Calling the listenting server function
start();
