// Passo 1 - pegar o elemento html da seta avancar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
//variavel let deixa mudar
let cartaoAtual = 0;

// Passo 2 - adicionar um jeito de identificar o click no botão
btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;
    // Passo 4 - buscar o cartão que está selecionado e esconder
    mudarCartaoSelecionado();
    // Passo 3 - aparecer o proximo cartão da lista
    cartaoAtual++;
    mostrarNovoCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
    mudarCartaoSelecionado();
    cartaoAtual--;
    mostrarNovoCartao(cartaoAtual);
});

function mudarCartaoSelecionado() {
    //classList é usado para adicionar ou remover (nomes) em classes de um elemento Html
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarNovoCartao(parametro) {
    cartoes[parametro].classList.add("selecionado");
}



