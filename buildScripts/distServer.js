import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.get('/users', function (req, res) {
  // Hard coding for simplicity.
  res.json([
    { "id": 1, "firstName": "firstName1", "lastName": "lastName1", "email": "email1@server.com" },
    { "id": 2, "firstName": "firstName2", "lastName": "lastName2", "email": "email2@server.com" },
    { "id": 3, "firstName": "firstName3", "lastName": "lastName3", "email": "email3@server.com" }
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
