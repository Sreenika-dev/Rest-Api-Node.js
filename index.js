import http from "http";
import fs from "fs";
import * as globalObj from "./feature.js";



const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./index.html", (err, home) => {
      res.end(home);
    });
  } else if (req.url === "/about") {
    res.end("<h1>About Page</h1>");
  } else if (req.url === "/blog") {
    res.end("<h1>Blog Page</h1>");
  } else if (req.url === "/contact") {
    res.end("<h1>Contact Page</h1>");
  } else if (req.url === "/love") {
    res.end(`<h1>Love is ${globalObj.lovePercentageCalc()}</h1>`);
  } else {
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(5000, () => {
  console.log("Server is listening");
});
