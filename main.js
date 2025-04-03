$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()//criar uma const. com ID para colocar a imagem nova e mais ".value" que no jGuery e ".val"
        const novoItem = $('<li style="display: none"></li>')//agora criar o elemento HTML que será incerido no final da lista
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem)//para adicionar o elemento ao novo item
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `)
        .appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)//efeito de aparecimento da imagem (QUE SÃO 1000 SEGUNDOS)
        $('#endereco-imagem-nova').val('')// para limpar o campo
    })
})