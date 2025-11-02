const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type','application/json');
  res.end(JSON.stringify({ok:true, path:req.url, time: new Date().toISOString()}));
});
server.listen(port, ()=> console.log('listening on', port));
