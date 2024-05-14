import express from 'express';
import logger from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import * as db from "./db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3260;
let myPath = __dirname.split("/src")[0];
const headerFields = { "Content-Type": "text/html" };

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/static', express.static('../client'))

async function createName(response, name) {
  if (name === undefined) {
    response.writeHead(400, headerFields);
    response.write("<h1>Name Required</h1>");
    response.end();
  } else {
    try {
      await db.saveName("username", name);
      response.writeHead(200, headerFields);
      response.write(`<h1>Name "${name}" Created</h1>`);
      response.end();
    } catch (err) {
      console.log("ouch!")
      response.writeHead(500, headerFields);
      response.write("<h1>Internal Server Error</h1>");
      response.write("<p>Unable to create counter</p>");
      response.write(`<p>This is likely a duplicate name!</p>`);
      response.end();
    }
  }
}
async function readName(response, name) {
  try {
    const counter = await db.getName("username");
    response.writeHead(200, headerFields);
    response.write(`${counter.user}`);
    response.end();
  } catch (err) {
    response.writeHead(404, headerFields);
    response.write(`<h1>${name} Not Found</h1>`);
    response.end();
  }
}

async function changeName(response, namer) {
  try {
    await db.updateName(namer);
    response.writeHead(200, headerFields);
    response.write(`${namer}`);
    response.end();
  } catch (err) {
    response.writeHead(404, headerFields);
    response.write(`<h1>Name ${namer} Not Found</h1>`);
    response.end();
  }
}

async function deleteName(response, name) {
  try {
    let name = await db.getName(name);
    response.writeHead(200, headerFields);
    response.write(`<h1>Name Deleted</h1>`);
    response.end();
    await db.removeName("username");
  } catch (err) {
    response.writeHead(404, headerFields);
    response.write(`<h1>Name ${name} Not Found</h1>`);
    response.end();
  }
}
const MethodNotAllowedHandler = async (request, response) => {
  response.writeHead(405, { "Content-Type": "text/plain" });
  response.write("Method Not Allowed");
  response.end();
};
app
  .route("/read")
  .get(async (request, response) => {
    const options = request.query;
    readName(response, options.name);
  });
  
app.route("/create")
.post(async (request, response) => {
  const options = request.query;
  createName(response, options.name);
});

app.route("/update")
.put(async (request, response) => {
  const options = request.query;
  console.log(options.name);
  changeName(response, options.name);
})
.all(MethodNotAllowedHandler);

app.route("/delete")
.delete(async (request, response) => {
  const options = request.query;
  deleteName(response, "username");
})
.all(MethodNotAllowedHandler);

app.route("*").all(async (request, response) => {
  response.status(404).send(`Not found: ${request.path}`);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});