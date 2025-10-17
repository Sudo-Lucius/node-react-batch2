const express = require('express')
const { createMovie } = require('../controllers/movieController')
const { readMovie } = require('../controllers/movieController')
const { readMovieById } = require('../controllers/movieController')
const { updateMovie } = require('../controllers/movieController')
const { deleteMovie } = require('../controllers/movieController')
const { basicAuth } = require('../middleware/basicAuth')
const { createCategory } = require('../controllers/categoryController')
const { readCategory } = require('../controllers/categoryController')
const { updateCategory } = require('../controllers/categoryController')
const { deleteCategory } = require('../controllers/categoryController')
const router = express.Router()


router.post('/movies', basicAuth ,createMovie)
router.get('/movies',  readMovie)
router.get('/movies/:id',  readMovieById)
router.put('/movies/:id', basicAuth ,updateMovie)
router.delete('/movies/:id', basicAuth ,deleteMovie)

router.post('/category', basicAuth ,createCategory)
router.get('/category',  readCategory)
router.get('/category/:id',  readMovieById)
router.put('/category/:id', basicAuth ,updateCategory)
router.delete('/category/:id', basicAuth ,deleteCategory)

module.exports = router