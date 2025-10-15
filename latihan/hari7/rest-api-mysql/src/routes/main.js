const express = require('express')
const { createMovie } = require('../controllers/movieController')
const { readMovie } = require('../controllers/movieController')
const { readMovieById } = require('../controllers/movieController')
const { updateMovie } = require('../controllers/movieController')
const { deleteMovie } = require('../controllers/movieController')
const router = express.Router()


router.post('/movies', createMovie)
router.get('/movies', readMovie)
router.get('/movies/:id', readMovieById)
router.put('/movies/:id', updateMovie)
router.delete('/movies/:id', deleteMovie)

module.exports = router