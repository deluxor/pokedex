/*
Before anything else, im using a mix of a es6 and good old school JS,
so please keep in mind it needs es6 SUPPORT.

Hail the good arrow functions for clean code!
*/
function pokemons(pokemonList) {
    this.pokemonList = pokemonList;
}
module.exports = pokemons;
pokemons.prototype = {
    getAll: function(req, res) {
        let self = this;
        res.json(self.pokemonList);
    },
    getByNumber: function(req, res) {
        let self = this,
            id = req.params.id;
        var filteredPokemon = self.pokemonList.filter((pokemon) => (pokemon.Number === id));
        res.json(filteredPokemon);
    },
    getByName: function(req, res) {
        let self = this,
            name = req.params.name;
        var filteredPokemon = self.pokemonList.filter((pokemon) => (pokemon.Name === name));
        res.json(filteredPokemon);
    }
};