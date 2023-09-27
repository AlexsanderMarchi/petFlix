const express = require('express');
const router = express.Router();
const controller = require('./../controllers/movies');


router.get('/video/:id', controller.listaMovies);
router.get('/videoLocal', controller.videoLocal);

module.exports = router;