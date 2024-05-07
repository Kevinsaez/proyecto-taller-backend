const express = require("express");
const rute = express.Router("/");

const { cargarNuevoUsuario } = require("../usuarios/authController.js");

rute.post("/register", cargarNuevoUsuario);
module.exports = rute;