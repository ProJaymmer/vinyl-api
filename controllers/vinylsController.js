const express = require('express');
const router = express.Router();
const Vinyl = require('./../VinylSchema');

// POST REQUEST
router.post('/', (req, res) => {
	Vinyl.create(req.body).then((vinyl) =>
		res.json({ status: 200, vinyl: vinyl })
	);
});

// GET REQUEST
router.get('/', (req, res) => {
	Vinyl.find().then((vinyls) => res.json(vinyls));
});

module.exports = router;
