/* 
Jogo de Adivinhação - JS Completo
- Número secreto entre 0 e 100
- Máximo de 10 tentativas
- Corações como tentativas restantes
- Dicas: maior/menor + distância (perto/longe)
- Botão de reiniciar
*/

let numeroSecreto;
const tentativasMaximas = 10;
let contador;

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 101);
    contador = 0;
    document.getElementById("palpite").value = "";
    document.getElementById("dica").textContent = "";
    document.getElementById("resultado").textContent = "";
    atualizarCorações();
}

function atualizarCorações() {
    const coracoesRestantes = tentativasMaximas - contador;
    document.getElementById("tentativas").textContent =
        "❤️".repeat(Math.max(coracoesRestantes, 0));
}

function validarPalpite() {
    const palpite = parseInt(document.getElementById("palpite").value);
    const dicaEl = document.getElementById("dica");
    const resultadoEl = document.getElementById("resultado");
    if (isNaN(palpite) || palpite < 0 || palpite > 100) {
        resultadoEl.textContent = "⚠️ Palpite inválido! Digite 0 a 100.";
        return;
    }
    contador++;
    if (palpite === numeroSecreto) {
        resultadoEl.textContent = "🎉 Parabéns! Você acertou!";
        dicaEl.textContent = "";
        atualizarCorações();
        return;
    }

    dicaEl.textContent = palpite > numeroSecreto ? "O número é menor." : "O número é maior.";
    const diferenca = Math.abs(palpite - numeroSecreto);
    if (diferenca <= 5) {
        dicaEl.textContent += " 🔥 Muito perto!";
    } else if (diferenca <= 15) {
        dicaEl.textContent += " 🙂 Perto!";
    } else {
        dicaEl.textContent += " ❄️ Bem longe!";
    }

    atualizarCorações();

    if (contador >= tentativasMaximas) {
        resultadoEl.textContent = "💀 Você perdeu! O número era " + numeroSecreto;
        dicaEl.textContent = "";
    }
}

function reiniciarJogo() {
    iniciarJogo();
}

window.onload = iniciarJogo;
