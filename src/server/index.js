// require environment variables -- MUST BE FIRST.
require("dotenv").config();
const express = require("express");
const app = express();
// socket.io requires http server
const http = require("http").createServer(app);
// bring in socket.io
const io = require("socket.io")(http);

// set up variables
const PORT = process.env.PORT || 3030;
const path = require("path");
const DIR = __dirname;
const CLIENT = "../client/";
const CLIENT_DIR = path.join(DIR, CLIENT);

// body parser
app.use(express.json());

// root route
app.get("/", (req, res) => {
  res.sendFile(CLIENT_DIR + "index.html");
});

// check for user connection
io.on("connection", socket => {
  // DELETE THIS COMMENTED OUT SECTION
  // The following comment can be seen from the console log in index.html
  //
  // var test = { ...socket.client };
  // for (let i in test) {
  //   console.log(i);
  // }
  // console.log(`
  // Socket nsp: ${socket.nsp}
  // Socket server: ${socket.server}
  // Socket adapter: ${socket.adapter}
  // Socket id: ${socket.id}
  // Socket client: ${socket.client}
  // Socket conn: ${socket.conn}
  // Socket rooms: ${socket.rooms}
  // Socket acks: ${socket.acks}
  // Socket connected: ${socket.connected}
  // Socket disconnected: ${socket.disconnected}
  // Socket handshake: ${socket.handshake}
  // Socket fns: ${socket.fns}
  // Socket flags: ${socket.flags}
  // Socket _rooms: ${socket._rooms}
  // `);

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
