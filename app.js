// Require a inbuilt function which is used to add up modules in this file
// So we just imported a http package in built in global scope
const http = require('http');
const routes = require("./routes");

console.log(routes.someText);

// So here we created a function which takes two values request and response
const server = http.createServer(routes.handler);

// This will start a process where nodejs will keep this running for incoming request
// This takes port and thats it
server.listen(3000);
