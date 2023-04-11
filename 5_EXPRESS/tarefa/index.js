const express = require('express');
const path = require('path');
const users = require('./user');

const app = express();
const port = 5000;
const basePath = path.join(__dirname, 'templates');

app.use(express.static('public'));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use('/users', users);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.use(function (req, res, next) {
  res.status(404);
  res.sendFile(`${basePath}/notfound.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
