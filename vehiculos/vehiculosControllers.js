const dbConection = require('../config/conneccionDB.js')

//mostrar todos los vehiculos
const mostrarVehiculos = (req, res) => {
    dbConection.query("SELECT * FROM vehiculos", (err, data) => {
        if (err) {
            res.status(500).json({ 'mensaje': err })
        } else {
            res.send(data)
        }
    })
}
module.exports = { mostrarVehiculos}