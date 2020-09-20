const express = require('express');
const router = express.Router();
const translate = require('../services/translator');


router.post('/', async (req, res) => {
    res.send( await translate(req.body.sentence));
  });


  module.exports = router;