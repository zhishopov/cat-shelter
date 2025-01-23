import http from "http";

import homeView from "./views/home/index.html.js";
import siteCss from "./content/styles/site.css.js";

const server = http.createServer((request, response) => {
  console.log("HTTP Request");

  if (request.url === "/styles/site.css") {
    response.writeHead(200, {
      "content-type": "text/css",
    });

    response.write(siteCss);

    return response.end();
  }

  response.write(homeView);

  response.end();
});

server.listen(3000);
console.log("Server is listening on http://localhost:3000...");
