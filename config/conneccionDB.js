const mysql2 = require('mysql2');

const infoDB = {
    host: 'localhost',
    user: 'root',
    database: 'tallerdb',
}

const dbConection = mysql2.createConnection(infoDB);

dbConection.connect((error) => {
    if (error) {
        if (error.code === 'ER_BAD_DB_ERROR') {
            console.log('error con la conexion: ' + error.sqlmessage);
        } else {
            console.log(error);
        }
    } else {
        console.log('Conexion con la base de datos exitosa!!!')
    }
});

module.exports = dbConection;