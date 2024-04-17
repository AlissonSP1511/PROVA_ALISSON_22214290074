const Prova = require('../models/Prova');
const ProvaController = {
    getAll:async(req,res) =>{
        res.json( await Prova.find())
    },
    get:async(req,res) =>{
        try {
            res.json( await Prova.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
        // res.json( await Prova.find(req.params.id))
    },
    create:async(req,res) =>{
        try {
            res.json( await Prova.create(req.body))
        } catch (error) {
            res.status(400).json(error) // 404 not found (error)
        }
    },
    update:async(req,res) =>{
        try {
            res.json( await Prova.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
    },
    delete:async(req,res) =>{
        try {
            res.json( await Prova.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
    }
}
module.exports = ProvaController