// require environment variables -- MUST BE FIRST.
require("dotenv").config();
const express = require("express");
const app = express();
// socket.io requires http server
const http = require("http").createServer(app);
// bring in socket.io
const io = require("socket.io")(http);
const path = require("path");

// set up variables
const PORT = process.env.PORT || 3030;
const DIR = __dirname;
const CLIENT = "../client/";
const CLIENT_DIR = path.join(DIR, CLIENT);

// body parser
app.use(express.json());

// static for dist/build

// root route
app.get("/", (req, res) => {
  res.sendFile(CLIENT_DIR + "index.html");
});

// check for user connection
io.on("connection", socket => {
  console.log(`User has connected!`);
  // check for user disconnect
  socket.on("disconnect", () => {
    console.log(`User has disconnected!`);
  });
});

// listen for socket connection
http.listen(PORT, () => {
  console.log(`Http server listening on ${PORT}`);
});
