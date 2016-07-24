'use strict';
/*
 Before anything else, im using a mix of a es6 and good old school JS,
 so please keep in mind it needs es6 SUPPORT.

 Hail the good arrow functions for clean code!
 */
const pokemonData = require('../pokemon');

module.exports = {
  getAll: (req, res) => {
    res.json(pokemonData);
  },
  getByNumber: (req, res) => {
    let id = req.params.id;
    var filteredPokemon = pokemonData.filter((pokemon) => (pokemon.Number === id));
    return res.json(filteredPokemon);
  },
  getByName: (req, res) => {
    let name = req.params.name;
    var filteredPokemon = pokemonData.filter((pokemon) => (pokemon.Name === name));
    return res.json(filteredPokemon);
  }
};