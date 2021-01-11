import express from'express';
import getAllCities from'../services/getAllCities.js';
import createCity from'../services/createCity.js';

const router = express.Router();

router.post('/api/eoloplants', createCity);

router.get('/api/eoloplants/cities', (req, res) => {})

router.get('/api/cities', getAllCities);

export default router;
