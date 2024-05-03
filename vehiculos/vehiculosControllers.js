const dbConection = require("../config/conneccionDB.js");

//mostrar todos los vehiculos
const mostrarVehiculos = (req, res) => {
  dbConection.query("SELECT * FROM vehiculos", (err, data) => {
    if (err) {
      res.status(500).json({ mensaje: err });
    } else {
      res.send(data);
      console.log(data);
    }
  });
};

// carga el vehiculo
const cargarVehiculo = (req, res) => {
  let {
    idCliente,
    dominio,
    marca,
    modelo,
    titular,
    localidadCedula,
    nroMotor,
    neroChasis,
  } = req.body;

  const imagen = "http://localhost:4000/imagenes/" + req.file.filename;

  dbConection.query(
    "INSERT INTO vehiculos (idCliente, dominio, marca, modelo, titular, localidadCedula, nroMotor, neroChasis, imagenVehiculo) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      idCliente,
      dominio,
      marca,
      modelo,
      titular,
      localidadCedula,
      nroMotor,
      neroChasis,
      imagen,
    ],
    (err, data) => {
      if (err) {
        res.status(500).json({ mensaje: err });
      } else {
        res.status(201).json({ Mensaje: "Vehiculo cargado con exito" });
      }
    }
  );
};

const mostrarVehiculoCliente = (req, res) => {
  const idCliente = req.params.idCliente;
  console.log(idCliente);
 
  dbConection.query( "SELECT * FROM vehiculos WHERE idCliente = ?",
    [idCliente],
    (err, data) => {
      if (err) {
        res.status(500).json({ mensaje: err });
      } else {
        res.send(data);
        console.log(data);
      }
    }
  );
};

module.exports = { mostrarVehiculos, cargarVehiculo, mostrarVehiculoCliente };
