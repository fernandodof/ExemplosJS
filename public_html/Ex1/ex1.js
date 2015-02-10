var caixa = {
    altura: 2,
    largura: 5,
    comprimento: 5,
    getVolume : function (){
        return this.altura * this.comprimento * this.largura;
    }
};
console.log(caixa);

String.prototype.toString = function (){ 
    return 'TESTE '+ JSON.stringify(__proto__);
};

function Livro(isbn, autor){
    this.isbn = isbn;
    this.autor = autor;
}


function Animal(especie){
    this.especie = especie;
}

function Cachorro(especie, nome){
    Animal.call(this, especie);
    this.nome = nome;
}

var cachorro = new Cachorro('Mamífero', 'REX');

console.log(cachorro);

//
//
//console.log('Estrutura do Livro '+Livro);
//console.log('Excecução da Função Livro '+Livro());
//
//var livro = new Livro('123456', 'JS');
//
//console.log('O Objeto Livro '+ JSON.stringify("livro".toString()));
// 
// 