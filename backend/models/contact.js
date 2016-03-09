//Dependencies 

var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var contactShema = new mongoose.Schema({
	serial: String,
	nome: String,
	telefone: String,
	data: Date,
	operadora: {
		nome: String,
		codigo: String
	}
});

// Return model
module.exports = restful.model('Contacts', contactShema);
