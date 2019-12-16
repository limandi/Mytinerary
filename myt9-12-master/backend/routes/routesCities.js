const express = require('express')
const router = express.Router();
const cityModel = require('../models/cityModel');

router.get('/all',
    (req, res) => {
        cityModel.find((err, cities) => {
            if (err) {
                console.log('Error find users: ', error);
                return res.status(500).json({ err: 'Error al consultar usuarios.' })
            }
            res.status(200).json({ cities: cities });
            console.log(cities)
        });
    });
module.exports = router;