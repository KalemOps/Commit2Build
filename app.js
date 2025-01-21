const express = require('express');
const axios = require('axios'); 
const app = express();
const port = 3000;
const BASE_URL = 'https://pokeapi.co/api/v2';
//--------------------------------------------

app.use(express.json());

app.get('/api/pokemon', async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon?limit=10`);
        const pokemonList = response.data.results;  
        res.json(pokemonList);
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        res.status(500).json({ error: 'Failed to fetch Pokémon' });
    }
});

app.listen(port, () => {
    console.log(`PokeApi: http://localhost:${port}`);
});
