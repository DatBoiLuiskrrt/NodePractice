const express = require('express'); // import the express package

const server = express(); // creates the server
server.use(express.json());
// handle requests to the root of the api, the / route
//GET READS DATA
server.get('/hobbits', (req, res) => {
  res.send('Welcome from Hobbitown ');
});

server.post('/hobbits', (req,res) => {
    res.status(201).json( { url: '/hobbits', operation: "POST" });

}) 
server.put('/hobbits', (req,res) => {
    res.status(200).json( { url: '/hobbits', operation: "PUT" });
})

server.delete('/hobbits', (req,res) => {
    res.status(204).json( { url: '/hobbits', operation: "DELETE" });
})



// watch for connections on port 5000
server.listen(5000, () =>
  console.log('Server running on http://localhost:5000')
);