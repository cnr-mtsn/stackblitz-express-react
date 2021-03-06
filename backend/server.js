// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const people = [
  {
    id: 0,
    name: 'Conner Matson',
    age: 26,
    title: 'Computer Wizard',
  },
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all data
app.get('/api', (req, res) => {
  res.send(people);
});

app.post('/api/createPerson', (req, res) => {
  var newPerson = req.body;
  people.push(newPerson);
  res.json(people);
});

// starting the server
app.listen(4000, () => {
  console.log('listening on port 4000');
});
