// import the pets array from data.js
const pets = require("./data");

// init express app
const express = require("express");
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get("/", (req, res) => {
  // serve up the public folder as static index.html file
  res.send("Welcom to the server");
});

// hello world route
app.get("/api", (req, res) => {
  res.send("Hello World!");
});

// get all pets from the database
app.get("/api/v1/pets", (req, res) => {
  // send the pets array as a response
  // use the res object to Send the array of pets
  //to the requestor

  res.send(pets);
});

// get pet by owner with query string
app.get("/api/v1/pets/owner", (req, res) => {
  // get the owner from the request
  // finder the variable you going to be working with "OWNER"
  //now insert both the req object the the variable together

  const owner = req.query.owner;

  // find the pet in the pets array
  const pet = pets.find((pet) => pet.owner === owner);

  // send the pet as a response
  // use res to the the object
  //

  res.send(pet);
});

// get pet by name
app.get("/api/v1/pets/:name", (req, res) => {
  // get the name from the request
  // find the const variable in the root "PETS"
  // do the same thing as pets by owner insert both the req and the const "PETS"

  const name = req.params.name;

  // find the pet in the pets array
  const pet = pets.find((pet) => pet.name === name);

  // send the pet as a response
});

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

module.exports = app;
