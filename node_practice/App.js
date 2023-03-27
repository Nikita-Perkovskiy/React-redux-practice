// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello World!");
//   })
//   .listen(8080);

// console.log("j", __dirname);

const http = require("http");
const fs = require("node:fs");

const server = http.createServer((request, response) => {
  response.writeHeader(200, { "Content-Type": "text/html" });
  if (request.url === "/") {
    fs.readFile("./public/index.html", (err, data) => {
      if (err) {
        throw err;
      }
      response.write(data);
      response.end();
    });
  } else if (request.url === "/about") {
    response.end("Empty page!");
  } else if (request.url === "/register") {
    fs.readFile("./public/register.html", (err, data) => {
      if (err) {
        throw err;
      }

      response.write(data);
      response.end();
    });
  } else {
    response.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
      `);
  }
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
