const path = require('path');
const router = require('express').Router();

const mockedCities = require('../temp-mocked-data/cities.js');

router.post('/api/eoloplants', (req, res) => {

    const result = {foo: 42};

    res.json(result);
});

router.get('/api/cities', (req, res) => {
    res.json(mockedCities);
})

module.exports = router;
