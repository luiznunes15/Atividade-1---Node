const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");

  if (request.url === '/') {
    response.end(`<h1>Ola! Seja bem vindo!<h1>`);  
  }
  else if (request.url === '/sobre') {
    response.end(`<h1>Nos somos a maior rede social de troca de mensagens!<h1>`);  
  }
  else if (request.url === '/contato/whatsapp') {
    response.end(`<h1>Contato: (11) 99991-0621!<h1>`);  
  }
  else {
    response.statusCode = 404;
    response.end(`<h1>A pagina solicitada nao existe!<h1>`)
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});