import http from "http";
import app from "./app";

// const http = require("http");
// const app = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);

// "start": "nodemon server.js",
// "start": "babel-node server.js",
