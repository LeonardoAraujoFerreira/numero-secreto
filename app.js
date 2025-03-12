let listaSorteados = []
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1
let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
exibirTextoNaTela('h1', 'Número Secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 20')
function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!')
        exibirTextoNaTela('p', 'Você acertou o número secreto '+numeroSecreto+' com '+tentativas+' '+palavratentativa+'! ')
        document.getElementById('reiniciar').removeAttribute('disabled',)
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número é menor que '+chute+'!' )
        }else {
            exibirTextoNaTela('p', 'O número é maior que '+chute+'!' )
        }
        tentativas++
       palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        limparCampo()
    }
}
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() *20 +1)
   let quantidadeNumeroEscolhidos = listaSorteados.length;
   if (quantidadeNumeroEscolhidos == 20) {
    listaSorteados = []
    exibirTextoNaTela('h1', 'Parabéns!');
    exibirTextoNaTela('p', 'Você acertou todos os números de 1 a 20!');
   }
   if (listaSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio() 
   } else {
    listaSorteados.push(numeroEscolhido)
    return numeroEscolhido
   }
}
function limparCampo() {
    chute = document.querySelector('input')
    chute.value= ''
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirTextoNaTela('h1', 'Número Secreto')
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 20')
    document.getElementById('reiniciar').setAttribute('disabled', true)
}