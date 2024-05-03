const express = require("express");

const rute = express.Router("/");
const {
  mostrarClientes,
  cargarCliente,
  mostrarUnCliente,
  eliminarCliente,
  modificarCliente,
  login,
  verData,
} = require("./clientesControllers.js");

rute.get("/", mostrarClientes);
rute.post("/login/", login);
rute.get("/cliente", mostrarUnCliente);
rute.post("/cargarCliente", cargarCliente);
rute.put("/cargarCliente/:idCliente", modificarCliente);
rute.delete("/eliminarCliente", eliminarCliente);

rute.get("/accederInfo", verData);

module.exports = rute;
