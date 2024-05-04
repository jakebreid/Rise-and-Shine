import express from "express";
import logger from "morgan";
import * as db from "./db.js";

const headerFields = { "Content-Type": "text/html" };

const app = express();
const port = 3260;
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("src/client"));

const MethodNotAllowedHandler = async (request, response) => {
  response.writeHead(405, { "Content-Type": "text/plain" });
  response.write("Method Not Allowed");
  response.end();
};

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});