const http = require("node:http");
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.end("hello from the node server");
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
