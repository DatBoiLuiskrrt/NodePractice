const express = require('express'); // import the express package
const port = 4000;
const server = express(); // creates the server
server.use(express.json());
// handle requests to the root of the api, the / route
//GET READS DATA
server.get('/hobbits', (req, res) => {
    console.log(req.query);
  const sortField = req.query.sortby || 'id';
  const hobbits = [
      {
          id: 1,
          name: 'Samwise Gamgee',
          age: 20
      },
      {
          id: 2,
          name: 'Frodo Baggins',
          age: 21
      },
      {
          id:3,
          name: 'Pirata de Culiacan',
          age:19
      },
      {
          id:4,
          name: "El Mencho",
          age: 50
      }
    ];
    const response = hobbits.sort((a,b) => 
        a[sortField] < b[sortField] ? -1 : 1
    );
    res.status(200).json(response);
});

let hobbits = [
    {
      id: 1,
      name: 'Bilbo Baggins',
      age: 111,
    },
    {
      id: 2,
      name: 'Frodo Baggins',
      age: 33,
    },
  ];
  let nextId = 3;
  
  // and modify the post endpoint like so:
  server.post('/hobbits', (req, res) => {
      console.log(req.body);
    const hobbit = req.body;
    hobbit.id = nextId++;
  
    hobbits.push(hobbit);
  
    res.status(201).json(hobbits);
  });

  server.put('/hobbits/:id', (req, res) => {
    const hobbit = hobbits.find(h => h.id == req.params.id);
    console.log(hobbit);
  
    if (!hobbit) {
      res.status(404).json({ message: 'Hobbit does not exist' });
    } else {
      // modify the existing hobbit
      Object.assign(hobbit, req.body);
  
      res.status(200).json(hobbit);
    }
  });

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