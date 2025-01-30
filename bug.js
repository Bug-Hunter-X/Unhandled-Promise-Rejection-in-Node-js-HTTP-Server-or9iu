const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const asyncOperation = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('Success!');
      } else {
        reject(new Error('Simulated error'));
      }
    }, 1000);
  });

  asyncOperation
    .then(result => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    })
    .catch(error => {
      // Handle the error without proper logging or response
      console.error('An error occurred:', error);
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});