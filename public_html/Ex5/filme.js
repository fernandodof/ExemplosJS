function buscarFilme() {
    $('#loading').show();

    var nome = $('#nome-filme').val();
    var data = {q: nome};

    $.ajax({
        url: "http://imdb.wemakesites.net/api/1.0/get/title/",
        data: data,
        dataType: "jsonp",
        crossDomain: true,
        success: function (filme) {
            console.log(filme.data);

            if (filme.data === 'title not found') {
                alert('Titulo não encontrado');
            } else {
                $('#filme-imagem').attr('src', filme.data.poster);
                $('#filme-titulo').text(filme.data.title);

                var descricao = filme.data.description;

                var regEx = /\+/g;
                var descricao = descricao.replace(regEx, " ");

                $('#filme-ano').text(filme.data.year);
                $('#filme-descricao').text(descricao);
                $('#filme-duracao').text(filme.data.runningTime);

                $('#resultado').show();
            }

            $('#loading').hide();
        }
    });
}