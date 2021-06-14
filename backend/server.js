const express = require("express");
const dotenv = require("dotenv");
const products = require("./data/products");
const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("Api is runnning");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`server running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
