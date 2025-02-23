const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const cors = require("cors");
const menuRoute = require('./routes/menu.route');
const orderRoute = require('./routes/order.route');
const tableRoute = require('./routes/table.route');
const orderItemRoute = require('./routes/orderItem.route');
const categoryRoute = require('./routes/category.route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req, res)=>{
    res.send("Hello World!!!")
});

app.use("/menus", menuRoute);
app.use("/orders", orderRoute);
app.use("/tables", tableRoute);
app.use("/orderItems", orderItemRoute);
app.use("/categories", categoryRoute);

app.listen(port, () => {
    console.log("App started at port: " + port);
});