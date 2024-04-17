const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String,
});
const Prova = mongoose.model('Prova', Schema);

module.exports = Prova;