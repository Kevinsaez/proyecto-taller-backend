const express = require('express');

const rute = express.Router();
const { mostrarVehiculos} = require('./vehiculosControllers')

rute.get("/vehiculos", mostrarVehiculos);

module.exports = rute;