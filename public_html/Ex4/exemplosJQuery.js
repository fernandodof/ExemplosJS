function mudarTextoDoParagrfo() {
    $('#paragrafo').text("Novo Texto");
}

function removerConteudoDoQuadrado(){
    $('#quadrado1').empty();
}

function larguraEAlturaDoQuadrado(){
    $('#quadrado2').html('<p>Largura: '+$('#quadrado2').width() + 'px ' + '\nAltura: ' + $('#quadrado2').height()+'px</p>');
    
}

function animarQuadradoEsquerda() {
    $("#quadrado3").animate({left: '250px'});
}