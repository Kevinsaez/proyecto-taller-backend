const dbConection = require('../config/conneccionDB.js')

//mostrar todos los clientes
const mostrarClientes = (req, res) => {
    dbConection.query("SELECT * FROM clientes", (err, data) => {
        if (err) {
            res.status(500).json({ 'mensaje': err })
        } else {
            res.send(data)
        }
    })
}
//mostrar un cliente por nombre

const mostrarUnCliente = (req, res) => {
    let nomCliente = req.params.nomApe;
    dbConection.query("SELECT * FROM clientes WHERE nomApe=?", [nomCliente], (err, data) => {
        if (err) {
            res.status(500).json({ 'mensaje': err })
        } else {
            res.send(data)
        }
    })
}

//Cargar un cliente

const cargarCliente = (req, res) => {
    let { nomApe, nroDni, localidad, domicilio, email, telefono } = req.body
 
    dbConection.query("INSERT INTO clientes (nomApe, nroDni, localidad, domicilio, email, telefono) VALUES (?,?,?,?,?,?)", [nomApe, nroDni, localidad, domicilio, email, telefono], (err, data) => {
        if (err) {
            res.status(500).json({ 'mensaje': err });
        } else {
            res.status(201).json({ "Mensaje": "Cliente cargado con exito" });
        }
    })
}
// eliminar cliente

const eliminarCliente = (req, res) => {

    const { idCliente } = req.body;
    dbConection.query("DELETE FROM clientes WHERE idCliente=?", [idCliente], (err, data) => {
        if (data) {
            res.status(200).json({ "Mensaje": "Cliente eliminado con exito" });
        } else {
            res.status(500).json({ 'mensaje': err });
        }
    })
}

//modificar cliente

const modificarCliente = (req, res) => {

    const idCliente = req.params.idCliente;
    let { nomApe, nroDni, localidad, domicilio, email, telefono } = req.body

    dbConection.query("UPDATE clientes SET nomApe=?, nroDni=?, localidad=?, domicilio=?, email=?, telefono=? WHERE idCliente=?", [nomApe, nroDni, localidad, domicilio, email, telefono, idCliente], (err, data) => {
        if (data) {
            res.status(500).json({ "Mensaje": "Cliente modificado con exito" });

        } else {
            res.status(200).json({ 'mensaje': err });

        }
    })
}


module.exports = { mostrarClientes, cargarCliente, mostrarUnCliente, eliminarCliente, modificarCliente }