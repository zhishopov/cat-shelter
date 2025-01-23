import http from "http";

import siteCss from "./content/styles/site.css.js";
import homeView from "./views/home/index.html.js";
import addBreedView from "./views/addBreed.html.js";
import addCatView from "./views/addCat.html.js";

const server = http.createServer((request, response) => {
  console.log("HTTP Request");

  const url = request.url;

  if (url === "/styles/site.css") {
    response.writeHead(200, {
      "content-type": "text/css",
    });

    response.write(siteCss);

    return response.end();
  }

  if (url === "/") {
    response.writeHead(200, {
      "content-type": "text/html",
    });

    response.write(homeView);
  } else if (url === "/cats/add-breed") {
    response.writeHead(200, {
      "content-type": "text/html",
    });

    response.write(addBreedView);
  } else if (url === "/cats/add-cat") {
    response.writeHead(200, {
      "content-type": "text/html",
    });

    response.write(addCatView);
  }

  response.end();
});

server.listen(3000);
console.log("Server is listening on http://localhost:3000...");
