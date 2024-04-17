const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const conn = require('./db/Conn');
conn();

const routes = require('./routes/Router');
app.use('/', routes);

app.listen(3001, () => {
    console.log("Servidor iniciado!");
})
