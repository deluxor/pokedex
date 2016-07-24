/*
 Simple pokemon pokedex by Deluxor 2016
 du(at)rte.pm
 -----------
 This used a pokemon DB that im not really sure from where it came,
 athough i give full scredit for it.
 */
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const http = require('http');
const path = require('path');
const pokemonRoute = require('./routes/pokemons');


module.exports = CreateServer();

function CreateServer() {
  const app = express();
  var port =  process.env.PORT || 3000;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  // Routes
  const router = express.Router();
  router.get('/getall', pokemonRoute.getAll.bind(pokemonRoute));
  router.get('/getbynumber/:id', pokemonRoute.getByNumber.bind(pokemonRoute));
  router.get('/getbyname/:name', pokemonRoute.getByName.bind(pokemonRoute));
  router.get('/', function(req, res) {
    res.json({
      pokedex: 'v1.0',
      by: 'Deluxor',
      email: 'du(at)rte.pm'
    });
  });

  app.use('/', router);
  app.listen(port);
  console.log('PokeDex Server listens on port: ' + port);

  return app;
}