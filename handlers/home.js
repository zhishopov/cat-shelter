import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
// import cats from "../data/cats.json";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function homeView(request, response) {
  const url = request.url;
  const method = request.method;

  if (url === "/" && method === "GET") {
    response.writeHead(200, {
      "content-type": "text/html",
    });

    const filePath = path.normalize(
      path.join(__dirname, "/views/home/index.html.js")
    );

    try {
      const data = await fs.readFile(filePath, "utf-8");
      response.writeHead(200, { "content-type": "text/html" });
      response.write(data);
    } catch (error) {
      response.write("Page Not Found");
    }

    response.end();
  }
}
