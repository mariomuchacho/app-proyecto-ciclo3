/*Mongoose comienza con un esquema. Cada esquema se asigna a una colección MongoDB y
 define la forma de los documentos dentro de esa colección.*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    valor: Number,
    descripcion: String,
    estado: Boolean
})

module.exports = mongoose.model('products', ProductSchema);