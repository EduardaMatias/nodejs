const http = require("http");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true);
  const name = urlInfo.query.name;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (!name) {
    res.end(
      '<form method="get" action="/submit"><label for="name">Nome:</label><input type="text" id="name" name="name"><input type="submit" value="Enviar"></form>'
    );
  } else {
    res.end(`<h1>Bem vindo ${name} </h1>`);
  }
});

server.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
