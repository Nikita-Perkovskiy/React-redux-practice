// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello World!");
//   })
//   .listen(8080);

// console.log("j", __dirname);

// const http = require("http");
// const fs = require("node:fs");

// const server = http.createServer((request, response) => {
//   response.writeHeader(200, { "Content-Type": "text/html" });
//   if (request.url === "/") {
//     fs.readFile("./public/index.html", (err, data) => {
//       if (err) {
//         throw err;
//       }
//       response.write(data);
//       response.end();
//     });
//   } else if (request.url === "/about") {
//     response.end("Empty page!");
//   } else if (request.url === "/register") {
//     fs.readFile("./public/register.html", (err, data) => {
//       if (err) {
//         throw err;
//       }

//       response.write(data);
//       response.end();
//     });
//   } else {
//     response.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find the page you are looking for</p>
//         <a href="/">back home</a>
//       `);
//   }
// });

// server.listen(5000, () => {
//   console.log("Server listening on port : 5000....");
// });

// Now variant with exspress

const http = require("http");
const fs = require("node:fs");
const path = require("node:path");
const express = require("express");
const app = express();
const { products, users } = require("./bd/data.json");

app.use(express.static("./public"));

app.get("/register", (request, response) => {
  response
    .status(200)
    .sendFile(path.resolve(__dirname, "./public/register.html"));
});

app.get("/product", (request, response) => {
  response
    .status(200)
    .sendFile(path.resolve(__dirname, "./public/product.html"));
});

app.get("/api/users", (request, response) => {
  //логика работы с данными
  response.status(200).json({ success: true, data: users });
});

app.post("/api/users", (request, response) => {
  //логика работы с данными
  response.status(200).json({ success: true });
});

app.get("/api/products", (request, response) => {
  response.status(200).json({ success: true, data: products });
});

app.all("*", (request, response) => {
  response.status(404).send("resource not found");
});

app.listen(8000, () => {
  console.log("run server");
});
