const fetch = require('node-fetch');
const router = require('express').Router();

const mockedCities = require('../temp-mocked-data/cities.js');

router.post('/api/eoloplants', (req, res) => {

    const result = {foo: 42};

    res.json(result);
});

router.get('/api/eoloplants/cities', (req, res) => {})

router.get('/api/cities', async (req, res) => {
    const result = await fetch('http://localhost:8080/api/topographicdetails/');
    const data = await result.json();
    res.json(data);
})

module.exports = router;
