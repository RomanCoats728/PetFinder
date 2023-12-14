//import your data
const pets = require('./data.js')
//Create your express server
const express = require('express')
const app = express();
const PORT = 8080;

app.get('/api/v1/pets', (req, res) => {
    res.send(data)

});
    





