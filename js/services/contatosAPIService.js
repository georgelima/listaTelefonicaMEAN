angular.module('listaTelefonica').factory('contatosAPI', function($http, config) {
	var _getContatos = function(){
		return $http.get(config.baseUrl);
	}

	var _saveContato = function(contato){
		return $http.post(config.baseUrl, contato);
	}

	var _deleteContato = function(contato){
		return $http.delete(config.baseUrl+contato._id);
	}

	return {
		getContatos: _getContatos,
		saveContato: _saveContato,
		deleteContato: _deleteContato
	}
});