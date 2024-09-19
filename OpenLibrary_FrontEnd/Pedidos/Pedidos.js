function gravarConteudo(evento) {
    evento.preventDefault();

    let usuario = document.getElementById('usuario');
    let titulo = document.getElementById('titulo');
    let anoDeLancamento = document.getElementById('anoDeLancamento');
    let descricao = document.getElementById('descricao');
    let tipo = document.getElementById('tipo');
    let imagem = document.getElementById('imagem');


    let conteudoJson = {
        nome: usuario.value,
        titulo: titulo.value,
        lancamento: anoDeLancamento.value,
        descricao: descricao.value,
        tipo: tipo.value,
        imagem: imagem.value
    };

    fetch('http://localhost:8080/conteudo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(conteudoJson)
    })
    .then(function(response){
        if(response.status === 201){
            alert('Conteúdo gravado com sucesso!');
            window.location.href = 'Home.html'
        }else {
            alert('Ocorreu um erro ao gravar o conteúdo!');
        }
    });
}
