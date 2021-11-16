const express = require('express');
const morgan = require('morgan');
const vinylsController = require('./controllers/vinylsController');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(morgan('combined'));

// POSTMAN SETUP -- THIS IS "MIDDLEWARE"
app.use(express.urlencoded({ extended: false }));
// app.use(express.json);

app.use('/vinyls', vinylsController);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Vinyl Lab is Live on Port 3000`);
});
