angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope, $http){
    $scope.app = "Lista";  $scope.app2 = "Telefônica";
    // $scope.contatos = [
    // { nome: 'George', telefone: '99616081',data: new Date(), operadora: { nome: 'Oi', codigo: 14 }},
    // { nome: 'Guilherme', telefone: '98456376',data: new Date(), operadora: { nome: 'Tim', codigo: 41 }},
    // { nome: 'Antonio', telefone: '98317667',data: new Date(), operadora: { nome: 'Claro', codigo: 21 }},
    // { nome: 'Maŕcia', telefone: '99266680',data: new Date(), operadora: { nome: 'Vivo', codigo: 15 }}
    // ];
    var carregarContato = function(){
        $http.get('http://192.168.0.110:3000/api/contacts/').success(function(data){
            $scope.contatos = data;
        }).error(function(){
            alert('Erro ao carregar a lista dos contatos');
        });
    }
    carregarContato();

    $scope.adicionarContato = function(contato){
        contato.data = new Date();
        $http.post('http://192.168.0.110:3000/api/contacts/', contato).success(function(){
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
            $http.delete('http://192.168.0.110:3000/api/contacts/'+contato._id).success(function(){
                
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
