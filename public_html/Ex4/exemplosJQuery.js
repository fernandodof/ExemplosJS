function mudarTextoDoParagrfo() {
    $('#paragrafo').text("Novo Texto");
}

function removerConteudoDoQuadrado() {
    $('#quadrado1').empty();
}

function larguraEAlturaDoQuadrado() {
    $('#quadrado2').html('<p>Largura: ' + $('#quadrado2').width() + 'px ' + 'Altura: ' + $('#quadrado2').height() + 'px</p>');

}

function valorDoInput() {
    alert($('#input1').val());
}

function animarQuadradoEsquerda() {
    $("#quadrado3").animate({left: '250px'});
}

function adicionarElementoDepois() {
    $('#h3Exemplo').after("<p>" + $('#input2').val() + "</p>");
}

function serializarForm() {
    alert($('#form1').serialize());
}

function adcionarRemoverClasse() {
    $('#h2Exemplo').toggleClass('novaClasse');
}

$(document).ready(function () {



    $(window).resize(
            function () {
                if ($(window).width() <= 800) {
                    $('#quadrado1').css({width: '100px'});
                    $('#quadrado1 h2').css({'font-size': '15px'});
                } else {
                    $('#quadrado1').css({width: '200px'});
                    $('#quadrado1 h2').css({'font-size': '25px'});
                }
            }
    );
});