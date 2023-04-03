const mongoose = require('mongoose');

const Cliente  = mongoose.model('Cliente', { nombre: String, apellidos: String });
const Articulo = mongoose.model('Articulo',{ nombre: String, precio: Number });
const Viaje = mongoose.model('Viaje',{lugar: String, estado: String, fecha: Date});


// module.exports = Cliente;

module.exports =  {
    Cliente,
    Articulo,
    Viaje
};
