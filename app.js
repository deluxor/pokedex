/*
Simple pokemon pokedex by Deluxor 2016
du(at)rte.pm
-----------
This used a pokemon DB that im not really sure from where it came,
athough i give full scredit for it.
*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pokemonController = require('./routes/pokemons');
const app = express();
const fs = require('fs');
const pokemonList = JSON.parse(fs.readFileSync('pokemon.json', 'utf8'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
const router = express.Router();
const pokemonControllerObj = new pokemonController(pokemonList);
//Routes
router.get('/getall', pokemonControllerObj.getAll.bind(pokemonControllerObj));
router.get('/getbynumber/:id', pokemonControllerObj.getByNumber.bind(pokemonControllerObj));
router.get('/getbyname/:name', pokemonControllerObj.getByName.bind(pokemonControllerObj));
router.get('/', function(req, res) {
    res.json({
        pokedex: 'v1.0',
        by: 'Deluxor',
        email: 'du(at)rte.pm'
    });
});
app.use('/', router);
module.exports = app;