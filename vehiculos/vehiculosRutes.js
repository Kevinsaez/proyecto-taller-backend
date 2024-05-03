const express = require("express");
const rute = express.Router();

const { mostrarVehiculos, cargarVehiculo,mostrarVehiculoCliente } = require("./vehiculosControllers");
const update = require("../multer/configMulter");

rute.get("/vehiculos/", mostrarVehiculos);
rute.post("/cargarVehiculo", update.single("imagen"), cargarVehiculo);
rute.get("/vehiculosCliente/:idCliente", mostrarVehiculoCliente);
module.exports = rute;
