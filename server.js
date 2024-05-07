require("dotenv").config();
const express = require("express");
const server = express();
const port = process.env.PORT;
const cors = require("cors");
const morgan = require("morgan");

require("./config/conneccionDB.js");
server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/imagenes", express.static("./imagenes"));
server.use("", require("./clientes/clientesRoutes"));
server.use("", require("./vehiculos/vehiculosRutes.js"));
server.use("", require("./usuarios/authRutes.js"));

server.use(morgan("dev"));

server.listen(port, () => {
  console.log("server ejecutandose en el puerto: " + port);
});
