<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Readme - JS Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
            font-family: monospace;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .section {
            margin-bottom: 20px;
        }
        .section h2 {
            margin-top: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>JS Game - Número Secreto</h1>
        <div class="section">
            <h2>Descrição</h2>
            <p>Este é um jogo simples onde o objetivo é adivinhar um número secreto gerado aleatoriamente. O jogo foi desenvolvido utilizando HTML, CSS e JavaScript.</p>
        </div>
        <div class="section">
            <h2>Funcionalidades</h2>
            <ul>
                <li>Geração de um número secreto aleatório entre 1 e 50.</li>
                <li>Feedback imediato sobre se o número chutado é maior ou menor que o número secreto.</li>
                <li>Contagem de tentativas realizadas.</li>
                <li>Reinício do jogo com um novo número secreto.</li>
                <li>Integração com a Web Speech API para leitura de textos em voz alta.</li>
            </ul>
        </div>
        <div class="section">
            <h2>Como Jogar</h2>
            <ol>
                <li>Abra o arquivo <code>index.html</code> em seu navegador.</li>
                <li>Insira um número entre 1 e 50 no campo de entrada.</li>
                <li>Clique no botão "Chutar" para verificar se o número está correto.</li>
                <li>Se o número estiver errado, o jogo informará se o número secreto é maior ou menor que o chute.</li>
                <li>Continue chutando até acertar o número secreto.</li>
                <li>Após acertar, você pode reiniciar o jogo clicando no botão "Novo jogo".</li>
            </ol>
        </div>
        <div class="section">
            <h2>Estrutura do Projeto</h2>
            <ul>
                <li><code>index.html</code>: Estrutura principal do jogo.</li>
                <li><code>style.css</code>: Estilos visuais do jogo.</li>
                <li><code>app.js</code>: Lógica do jogo, incluindo geração de números aleatórios, verificação de chutes e reinício do jogo.</li>
                <li><code>img/</code>: Pasta contendo as imagens utilizadas no jogo.</li>
            </ul>
        </div>
        <div class="section">
            <h2>Requisitos</h2>
            <ul>
                <li>Navegador moderno com suporte a JavaScript e Web Speech API.</li>
            </ul>
        </div>
        <div class="section">
            <h2>Contribuição</h2>
            <p>Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto.</p>
        </div>
    </div>
</body>
</html>
