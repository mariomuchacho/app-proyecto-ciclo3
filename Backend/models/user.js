const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    nombreUsuario: String,
    rollUsuario: String,
    estadoUsuario: String
})

module.exports = mongoose.model('users', userSchema);