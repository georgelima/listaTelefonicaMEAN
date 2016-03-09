angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope, contatosAPI, serialGenerator){
    console.log(serialGenerator.generate());
    $scope.app = "Lista";  $scope.app2 = "Telefônica";
    var carregarContato = function(){
        contatosAPI.getContatos().success(function(data){
            $scope.contatos = data;
        }).error(function(){
            alert('Erro ao carregar a lista dos contatos');
        });
    }
    carregarContato();

    $scope.adicionarContato = function(contato){
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContato(contato).success(function(){
            carregarContato();              
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
        }).error(function(){
            alert('Sua requisição não pôde ser completa, contacte o administrador da rede');
        });
        
    };
    $scope.operadoras = [{nome: 'Oi', codigo: 14, categoria: 'Celular', preco: 2},{nome: 'Vivo', codigo: 15, categoria: 'Celular', preco: 2},{nome: 'Tim', codigo: 41, categoria: 'Celular', preco: 2},{nome: 'Claro', codigo: 21, categoria: 'Celular', preco: 2}];
    $scope.apagarContatos = function(contatos){
        $scope.contatos = contatos.filter(function(contato){
        if (contato.selecionado){
            contatosAPI.deleteContato(contato).success(function(){
                
            });
            console.log(contato._id);
        }
        if(!contato.selecionado){
            verificaLinhas();
                return contato;
        }
    });
    }
    $scope.isContatoSelecionado = function(contatos){
    	return contatos.some(function(contato){
            return contato.selecionado;
    });
    };
    $scope.ordenarPor = function(campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };
    });
