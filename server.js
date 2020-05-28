const express = require('express'); // import the express package
const port = 4000;
const server = express(); // creates the server
server.use(express.json());
// handle requests to the root of the api, the / route
//GET READS DATA
server.get('/hobbits', (req, res) => {
  const sortField = req.query.sortby || 'id';
  const hobbits = [
      {
          id: 1,
          name: 'Samwise Gamgee'
      },
      {
          id: 2,
          name: 'Frodo Baggins'
      }
    ];
    const response = hobbits.sort((a,b) => 
        a[sortField] < b[sortField] ? -1 : 1
    );
});

server.post('/hobbits', (req,res) => {
    res.status(201).json( { url: '/hobbits', operation: "POST" });

}) 
server.put('/hobbits', (req,res) => {
    res.status(200).json( { url: '/hobbits', operation: "PUT" });
})

server.delete('/hobbits/:id', (req,res) => {
    const id = req.params.id;
    console.log(req.params);
    // or we could destructure it like so: 
    // const { id } = req.params;
    res.status(200).json({
        url: `/hobbits/${id}`,
        operation: `DELETE for hobbit with id ${id}`,
    });
});



// watch for connections on port 5000
server.listen(4000, () =>
  console.log(`server running ${port}`)
);