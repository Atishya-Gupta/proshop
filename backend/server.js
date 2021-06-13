const express = require("express");
const products = require("./data/products");
const products = require("./data/products");
const app = express();

app.get("/", (req, res) => {
  res.send("Api is runnning");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  req.json(product);
});

app.listen(5000, console.log("server running on Port 5000"));
