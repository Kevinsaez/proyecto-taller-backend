const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./imagenes");
  },
  filename: (req, file, callback) => {
    const ext = file.originalname.split(".").pop();

    const nuevoFileName = "imagen-" + Date.now() + "." + ext;

    callback(null, nuevoFileName);
  },
});

const update = multer({ storage });

module.exports = update;
