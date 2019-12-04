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
  // check for user disconnect

  socket.on("chat message", (msg) => {
    console.log(socket.id + " says " + msg.theMessage);
    socket.broadcast.emit("send it back", msg);
  })

  socket.on("disconnect", () => {
    console.log(`${socket.id} has disconnected!`);
  });
});

// listen for socket connection
http.listen(PORT, () => {
  console.log(`Http server listening on ${PORT}`);
});
