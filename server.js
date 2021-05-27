const express = require('express');
const mongoose  = require('mongoose');
const app = require('./app');

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });


port = process.env.PORT || 8000;
app.listen(port,()=>{
  console.log(`server is running on ${port}`)
});
