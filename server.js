'use strict';
const express = require('express')
const app = express();
const config = require('./server/config/config');
const connectDB = require("./server/config/db");

//connect to database
connectDB();

app.use(express.json());

//routing
app.use(config.basePath, require("./server/routes"));

app.listen(config.port);
console.log(`Server running on port no :${config.port} with ${process.env.NODE_ENV} mode`);