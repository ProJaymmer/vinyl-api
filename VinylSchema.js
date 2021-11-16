const mongoose = require('./connection');

const VinylSchema = new mongoose.Schema({
	artistName: String,
	albumName: String,
});

const Vinyl = mongoose.model('Vinyl', VinylSchema);

module.exports = Vinyl;
