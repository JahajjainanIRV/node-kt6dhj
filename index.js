var http = require('http');

const server = http.createServer(function (req, res) {
  res.setHeader('Content-Type0', 'text/html');
  res.write('<html>');
  res.write('<head><title>Page Title</title></head>');
  res.write(
    '<body><h1>This is a Heading</h1><p>This is a paragraph.</p></body>'
  );
  res.end('</html>');
});
server.listen(3000);
