const express = require('express')
const ProvaController = require('../controllers/ProvaController')
// const CargoController = require('../controllers/CargoController')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})
// // Cargos
// router.get('/cargos', (req, res) => CargoController.getAll(req, res))
// router.post('/cargos', (req, res) => CargoController.create(req, res))
// router.get('/cargos/:id', (req, res) => CargoController.get(req, res))
// router.put('/cargos/:id', (req, res) => CargoController.update(req, res))
// router.delete('/cargos/:id', (req, res) => CargoController.delete(req, res))

//prova
router.get('/prova', (req, res) => ProvaController.getAll(req, res))
router.post('/prova', (req, res) => ProvaController.create(req, res))
router.get('/prova/:id', (req, res) => ProvaController.get(req, res))
router.put('/prova/:id', (req, res) => ProvaController.update(req, res))
router.delete('/prova/:id', (req, res) => ProvaController.delete(req, res))

module.exports = router