/* It uses the <script src="/socket.io/socket.io.js"></script> tag at
page*/

/* io() function will stablish the connection with the server, sending 
the "connection" event. */
console.log("Opening socket connection");
const socket = io();
