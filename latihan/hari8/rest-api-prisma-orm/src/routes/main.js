const express = require('express')
const { createMovie } = require('../controllers/movieController')
const { readMovie } = require('../controllers/movieController')
const { readMovieById } = require('../controllers/movieController')
const { updateMovie } = require('../controllers/movieController')
const { deleteMovie } = require('../controllers/movieController')
const { basicAuth } = require('../middleware/basicAuth')
const router = express.Router()


router.post('/movies', basicAuth ,createMovie)
router.get('/movies',  readMovie)
router.get('/movies/:id',  readMovieById)
router.put('/movies/:id', basicAuth ,updateMovie)
router.delete('/movies/:id', basicAuth ,deleteMovie)

module.exports = router