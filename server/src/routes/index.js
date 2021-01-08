const path = require('path');
const router = require('express').Router();

router.post('/api/eoloplants', (req, res) => {

    const result = {foo: 42};

    res.json(result);
})

module.exports = router;
