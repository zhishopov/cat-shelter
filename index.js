import http from "http";
import handlers from "./handlers/index.js";

const port = 3000;

const server = http.createServer((request, response) => {
  for (let handler of handlers) {
    if (!handler(request, response)) {
      break;
    }
  }
});

server.listen(port);
console.log(`Server is listening on http://localhost:${port}...`);
