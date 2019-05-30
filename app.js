import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

// import moment from 'moment';
// import uuid from 'uuid';
// "build": "babel server.js --out-dir build",



// Database
const db = require("./config/database2");

// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log("Error: " + err));

const app = express();


// const express = require("express");
// const app = express();
// const morgan = require("morgan");
// const bodyParser = require("body-parser");
// const moment = require("moment");
// const uuid = require("uuid");

//const clientRoutes = require("./api/routes/clients");
//import clientRoutes from "./api/routes/clients";
import clientRoutes from "./api/routes/clients2";
import smsRoutes from './api/routes/sms';

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((res, req, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requeted-with, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE");
    return res.status(200).json({});
  }

  next();
});

// Routes which should handle requests
app.use("/clients", clientRoutes);
app.use('/sms', smsRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

export default app;
//module.exports = app;
