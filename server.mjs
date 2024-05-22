import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';

const server = createServer(async (req, res) => {
  // Determine the file path based on the request URL
  let filePath = '.' + (req.url === '/' ? '/eye2.html' : req.url);

  try {
    // Read the requested file
    const data = await readFile(filePath);

    // Determine the content type based on the file extension
    let contentType = 'text/plain';
    switch (extname(filePath)) {
      case '.html':
        contentType = 'text/html';
        break;
      case '.css':
        contentType = 'text/css';
        break;
      // Add more cases for other file types if needed
    }

    // Serve the file with the appropriate content type
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch (error) {
    // If the file is not found, serve a 404 error
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Start the server on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// Run with `node server.mjs`
