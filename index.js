/**
 * Create your node.js server file index.js
 *  and add the code needed to serve the right
 *  page according to the url.

    localhost:8080 should take users to index.html
    
    localhost:8080/about should take users to about.html

    localhost:8080/contact-me should take users to contact-me.html

    404.html should display any time the user tries to go to a page not listed above.

 */
const { log } = require('node:console');
const fs = require('node:fs');
const http = require('node:http');
const port = 8080;
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./src/index.html', (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write('Something is wrong');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
    return;
  }
  if (req.url === '/about') {
    fs.readFile('./src/about.html', (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write('Something is wrong');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
    return;
  }
  if (req.url === '/contact-me') {
    fs.readFile('./src/contact-me.html', (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write('Something is wrong');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
    return;
  }

  fs.readFile('./src/404.html', (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write('Something is wrong');
    }
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write(data);
    console.log(`wrong url: ${req.url}`);
    res.end();
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong' + error);
  } else {
    console.log('Everything is working fine on port ' + port);
  }
});
