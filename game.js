/* 
Funcionalidades JavaScript:
Ao carregar a página, o JavaScript deve:
Gerar um número aleatório entre 1 e 100 e armazená-lo em uma variável.
Definir o número máximo de tentativas (ex: 10).
Inicializar o contador de tentativas.
Ao clicar no botão "Chutar", o JavaScript deve:
Capturar o valor inserido no input (palpite do jogador).
Validar se o palpite é um número válido entre 1 e 100.
Comparar o palpite com o número secreto e exibir uma mensagem:
"Você acertou!" (e o jogo termina).
"O número secreto é maior" (e o jogador continua tentando).
"O número secreto é menor" (e o jogador continua tentando).
Decrementar o contador de tentativas.
Exibir o número de tentativas restantes.
Se o jogador atingir o número máximo de tentativas, o jogo termina com a mensagem "Você perdeu! O número secreto era X".
*/

let numeroAleatorio =  Math.random() * 100;
let numeroInteiro = parseInt(numeroAleatorio);
let tentativasMaximas = 10;
let contador = 0;
alert(numeroInteiro);