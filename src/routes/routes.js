const express = require('express');
const { route } = require('express/lib/application');

const {insert, get, select, update, deleteRow } = 
require('../controllers/users.js');

const app = express.Router();

app.post('/insert', (req, res) => {
    insert(req.body)
    .then(() => res.status(200).send('Sucess posting!'))
    .catch((err) => res.status(500).send(err));
})

app.get('/get', (req, res) => {
    get()
    .then((rows) => res.status(200).send(rows))
    .catch((err) => res.status(500).send(err));
})

app.get('/select/:id', (req, res) => {
    select(req.params.id)
    .then((rows) => res.status(200).send(rows))
    .catch((err) => res.status(500).send(err));
})

app.put('/put/:id', (req, res) => {
    update(req.params.id, req.body)
    .then(() => res.status(200).send("Update sucess!"))
    .catch((err) => res.status(500).send(err));
});

app.delete('/delete/:id', (req, res) => {
    deleteRow(req.params.id)
    .then(() => res.status(200).send("Delete sucess!"))
    .catch((err) => res.status(500).send(err));
})

module.exports = app