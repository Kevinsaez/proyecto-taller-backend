const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const dbConection = require('../config/conneccionDB.js');

const cargarNuevoUsuario = async(req,res)=>{
    let {usuario,nombre,password}=req.body;
    
    let passwordEncriptada = await bcrypt.hash(password, 10);
    
    dbConection.query(
        "INSERT INTO usuarios (usuario, nombre, password) VALUES (?,?,?)",
        [usuario, nombre,passwordEncriptada],
        (err, data) => {
            if (err) {
                res.status(500).json({ mensaje: err });
            } else {
                res.status(201).json({ Mensaje: "Cliente cargado con exito" });
            }
        }
    );
};

module.exports = {
    cargarNuevoUsuario
  };
  

