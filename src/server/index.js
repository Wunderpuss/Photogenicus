// require environment variables -- MUST BE FIRST.
require("dotenv").config();
const express = require("express");
const app = express();

// bring in path methods
const path = require("path");

// socket.io requires http server
const http = require("http").createServer(app);

// bring in socket.io
const io = require("socket.io")(http);

// set up variables
const PORT = process.env.PORT || 3030;
const DIR = __dirname;
const CLIENT = "../client/";
const CLIENT_DIR = path.join(DIR, CLIENT);

// body parser
app.use(express.json());

// static for dist/build
app.use("/dist", express.static(path.join(DIR, "../../dist")));

// serve root route
app.get("/", (req, res) => res.sendFile(CLIENT_DIR + "index.html"));

// check for user connection
io.on("connection", socket => {
  console.log(`${socket.id} has connected!`);

  // check for solution attempt
  socket.on("solution attempt", ( data ) => {
    let testValue = 5;
    let testAnswer = 8;
    // TAKE CODE FROM DATA AND EVAL IT SO YOU CAN USE ITS FUNCTIONALITY
    let testFunc = eval(data.code);
    // FOR NOW TEST IF IT WORKS FOR OUR SINGLE ALGO ADD3
    if (testFunc(testValue) === testAnswer) {
      socket.emit('win');
      socket.broadcast.emit('lose');
    }
    else 
      socket.emit('try again');
  })
  
  // check for user disconnect
  socket.on("disconnect", () => {
    console.log(`${socket.id} has disconnected!`);
  });
});

// listen for socket connection
http.listen(PORT, () => {
  console.log(`Http server listening on ${PORT}`);
});
