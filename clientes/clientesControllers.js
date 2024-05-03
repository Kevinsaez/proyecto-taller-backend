const dbConection = require("../config/conneccionDB.js");
const bcrypt = require("bcrypt");

//mostrar todos los clientes
const mostrarClientes = (req, res) => {
  dbConection.query("SELECT * FROM clientes", (err, data) => {
    if (err) {
      res.status(500).json({ mensaje: err });
    } else {
      res.send(data);
    }
  });
};

// mostrar un cliente por nombre

const mostrarUnCliente = (req, res) => {
  let nomCliente = req.params.nomApe;
  dbConection.query(
    "SELECT * FROM clientes WHERE nomApe=?",
    [nomCliente],
    (err, data) => {
      if (err) {
        res.status(500).json({ mensaje: err });
      } else {
        res.send(data);
      }
    }
  );
};

//Cargar un cliente

const cargarCliente = async (req, res) => {
  let { nomApe, nroDni, localidad, domicilio, email, telefono, password } =
    req.body;

  let passwordEncriptada = await bcrypt.hash(password, 10);

  dbConection.query(
    "INSERT INTO clientes (nomApe, nroDni, localidad, domicilio, email, telefono, password) VALUES (?,?,?,?,?,?,?)",
    [nomApe, nroDni, localidad, domicilio, email, telefono, passwordEncriptada],
    (err, data) => {
      if (err) {
        res.status(500).json({ mensaje: err });
      } else {
        res.status(201).json({ Mensaje: "Cliente cargado con exito" });
      }
    }
  );
};
// eliminar cliente

const eliminarCliente = (req, res) => {
  const { idCliente } = req.body;
  dbConection.query(
    "DELETE FROM clientes WHERE idCliente=?",
    [idCliente],
    (err, data) => {
      if (data) {
        res.status(200).json({ Mensaje: "Cliente eliminado con exito" });
      } else {
        res.status(500).json({ mensaje: err });
      }
    }
  );
};

//modificar cliente

const modificarCliente = (req, res) => {
  const idCliente = req.params.idCliente;
  let { nomApe, nroDni, localidad, domicilio, email, telefono } = req.body;

  dbConection.query(
    "UPDATE clientes SET nomApe=?, nroDni=?, localidad=?, domicilio=?, email=?, telefono=? WHERE idCliente=?",
    [nomApe, nroDni, localidad, domicilio, email, telefono, idCliente],
    (err, data) => {
      if (data) {
        res.status(200).json({ Mensaje: "Cliente modificado con exito" });
      } else {
        res.status(500).json({ mensaje: err });
      }
    }
  );
};

//loguin y autentificacion
const login = (req, res) => {
  const email = req.body.email;

  const query = "SELECT email, password FROM clientes WHERE email=?";

  dbConection.query(query, [email], (err, data) => {
    if (err) {
      res.status(500).json({ mensaje: err.message });
    } else {
      res.send(data);
    }
  });
};



const verData = (req, res) => {};
module.exports = {
  mostrarClientes,
  cargarCliente,
  mostrarUnCliente,
  eliminarCliente,
  modificarCliente,
  login,
  verData,
};
