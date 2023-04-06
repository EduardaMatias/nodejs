const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Oi http</h1>");
});

server.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
