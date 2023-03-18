//esquema del usuario
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    telefono: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    }
});
//se exporta el modulo ("nombre de la tabla en la base de datos", nombre del schema) 
module.exports = mongoose.model("usuario", userSchema);
