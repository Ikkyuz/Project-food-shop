const express = require('express');
const app = express.Router();
const orderItemController = require('../controllers/orderItem.controller');

app.get("/", orderItemController.getAllOrderItems);
app.get("/:id", orderItemController.getOrderItemById);

module.exports = app;
