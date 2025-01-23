import http from "http";

const server = http.createServer((request, response) => {
  console.log("HTTP Request");
  console.log(request.url);

  response.write("Hello world!");

  response.end();
});

server.listen(3000);
console.log("Server is listening on http://localhost:3000...");
