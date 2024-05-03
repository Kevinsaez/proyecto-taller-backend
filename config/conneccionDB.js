const mysql2 = require("mysql2");
require("dotenv").config();

const infoDB = {
  host: process.env.HOST,
  user: process.env.HOST_NAME,
  database: process.env.HOST_BD,
};

const dbConection = mysql2.createConnection(infoDB);

dbConection.connect((error) => {
  if (error) {
    if (error.code === "ER_BAD_DB_ERROR") {
      console.log("error con la conexion: " + error.sqlmessage);
    } else {
      console.log(error);
    }
  } else {
    console.log("Conexion con la base de datos exitosa!!!");
  }
});

module.exports = dbConection;
