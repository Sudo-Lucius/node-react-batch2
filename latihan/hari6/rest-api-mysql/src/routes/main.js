const express = require('express')
const { createMovie } = require('../controllers/movieController')
const router = express.Router()


router.post('/movies', createMovie)

module.exports = router