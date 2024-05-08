import express from 'express';
import logger from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3260;
let myPath = __dirname.split("/src")[0];

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/static', express.static('../client'))

const MethodNotAllowedHandler = async (request, response) => {
  response.writeHead(405, { "Content-Type": "text/plain" });
  response.write("Method Not Allowed");
  response.end();
};

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});