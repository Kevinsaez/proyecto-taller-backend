
const express = require('express');

const rute = express.Router();
const { mostrarClientes, cargarCliente, mostrarUnCliente, eliminarCliente, modificarCliente } = require('./clientesControllers.js')

rute.get("/", mostrarClientes);
rute.get("/cliente/:nomApe", mostrarUnCliente);
rute.post("/cargarCliente", cargarCliente);
rute.put("/cargarCliente/:idCliente", modificarCliente);
rute.delete("/eliminarCliente", eliminarCliente);

module.exports = rute;