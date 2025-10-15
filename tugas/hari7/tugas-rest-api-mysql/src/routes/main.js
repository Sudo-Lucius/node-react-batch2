const express = require('express')
const { createNilaiMahasiswa } = require('../controllers/nilaiController')
const { readNilaiMahasiswa } = require('../controllers/nilaiController')
const { readNilaiMahasiswaById } = require('../controllers/nilaiController')
const { updateNilaiMahasiswa } = require('../controllers/nilaiController')
const { deleteNilaiMahasiswa } = require('../controllers/nilaiController')

const router = express.Router()


router.post('/nilai', createNilaiMahasiswa)
router.get('/nilai', readNilaiMahasiswa)
router.get('/nilai/:id', readNilaiMahasiswaById)
router.put('/nilai/:id', updateNilaiMahasiswa)
router.delete('/nilai/:id', deleteNilaiMahasiswa)

module.exports = router