const express = require('express');
const router = express.Router();
const itineraryModel = require('../models/itineraryModel');

// router.get('/itin',(req, res) => {
//     console.log("hola"),
//     itineraryModel.find((err, Itinerarios) => {
//         if (err) {
//             console.log('Error find users: ', error);
//             return res.status(500).json({ err: 'Error al consultar usuarios.'})
//         }
//         res.status(200).json({Itinerarios: I});
     
//     });
// });
router.get('/itin',
(req, res) => {
    console.log("hola"),
    itineraryModel.find()
    .then(Itinerarios => res.send(Itinerarios))
    .catch(err => console.log(err))
});


router.get('/:title',
	(req, res) => {
  		let itinerariosRequested = req.params.name;
  		itineraryModel.findOne({ name: itinerariosRequested })
			.then(Itinerarios => {
				res.send(Itinerarios)
			})
			.catch(err => console.log(err));
});



module.exports = router;