// create web server
// Filename: server.js

// Import the http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Sending the response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
  res.end();
});

// Server listening on port 8080
server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080/');
});
