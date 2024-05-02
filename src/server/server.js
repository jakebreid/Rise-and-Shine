import * as http from "http";
import * as url from "url";
import * as db from "./db.js";
import * as fsp from "fs/promises";

const headerFields = { "Content-Type": "text/html" };

async function basicServer(request, response) {
  const options = url.parse(request.url, true).query;

  // Check if the request method and path are equal to the given method and path
  const isEqual = (method, path) =>
    request.method === method && request.url === path;

  // Match the request method and path
  const isMatch = (method, path) =>
    request.method === method && request.url.startsWith(path);

  // Check if the request URL ends with a specific suffix
  const hasSuffix = (suffix) =>
    request.method === "GET" && request.url.endsWith(suffix);

  // Get the suffix of the request URL
  const getSuffix = (urlpath = request.url) => {
    const parts = urlpath.split(".");
    return parts[parts.length - 1];
  };

  // Get the content type based on the file type
  const getContentType = (urlpath = request.url) =>
    ({
      html: "text/html",
      css: "text/css",
      js: "text/javascript",
    })[getSuffix(urlpath)] || "text/plain";

  const sendStaticFile = async (urlpath = request.url) => {
    try {
      // Read the file from the src/client folder and send it back to the client
      const data = await fsp.readFile("src" + urlpath, "utf8");
      response.writeHead(200, { "Content-Type": getContentType(urlpath) });
      response.write(data);
      response.end();
      return;
    } catch (err) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("Not found: " + urlpath);
      response.end();
      return;
    }
  };

  // The following code handles static file requests for the client-side code.
  // You do not need to modify this code. It serves the client-side files from
  // the `src/client` directory.
  if (
    isEqual("GET", "") ||
    isEqual("GET", "/") ||
    isEqual("GET", "/client") ||
    isEqual("GET", "/client/") ||
    isEqual("GET", "/client/index.html")
  ) {
    sendStaticFile("/client/index.html");
    return;
  }

  if (
    (isMatch("GET", "") || isMatch("GET", "/")) &&
    (hasSuffix(".html") || hasSuffix(".css") || hasSuffix(".js"))
  ) {
    sendStaticFile("/client" + request.url);
    return;
  }
  response.writeHead(405, {"Content-Type": "text/plain"}); 
  response.write("Method Not Allowed")
  response.end();
}

http.createServer(basicServer).listen(3260, () => {
  console.log("Server started on port 3260");
});