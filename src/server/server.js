import http from 'http';
import url from 'url';
let count = 0;
function requestHandler(req, res) {
    
      res.writeHead(200, { 'Content-Type': 'text/html' });

      let reqURL = req.url;
      let pathname = url.parse(reqURL, true).pathname;      

      if(pathname === '/inc') {
        count++;
        res.end(`<strong>Count: ${count}</strong>`);
      } else {
        res.end("Server is running");
      }    
    
}
// TASK #4: Create the web server
// Add your implementation below.
const server = http.createServer(requestHandler);

server.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
