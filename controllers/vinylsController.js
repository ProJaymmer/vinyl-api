const express = require('express');
const router = express.Router();
const Vinyl = require('./../VinylSchema');

// POST REQUEST -- CREATE
router.post('/', (req, res) => {
	Vinyl.create(req.body).then((vinyl) =>
		res.status(201).json({ status: 201, vinyl: vinyl })
	);
});

// GET REQUEST -- READ ALL
router.get('/', (req, res) => {
	Vinyl.find().then((vinyls) => res.json(vinyls));
});

// DELETE REQUEST /:id
// delete the vinyl and return 204 no content
router.delete('/:id', (req, res) => {
	Vinyl.deleteOne({ _id: req.params.id }).then(() => res.status(204).json());
});

// PUT REQUEST /:id
// update a vinyl
router.put('/:id', (req, res) => {
	Vinyl.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
		(vinyl) => {
			res.status(200).json({ status: 200, vinyl: vinyl });
		}
	);
});

module.exports = router;
