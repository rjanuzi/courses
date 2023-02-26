const http = require("http");

const PORT = 80;

const routes = {
  "/": "Hello World!",
  "/books": "Books page",
  "/authors": "Authors page",
  "/publisher": "Publisher page",
  "/about": "About page",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(routes[req.url]);
});

server.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
