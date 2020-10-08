/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
  
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 
 /*

console.log("Bem vindo ao Jogo Blackjack")

let pontosJ
let pontosM

if (confirm("Clique em OK para iniciar uma rodada ou CANCELAR para sair"))
 {
   //SORTEAR CARTAS PARA JOGADOR E MAQUINA SE CLICAR EM OK
   //CANECLAR JOGO SE CLICAR CANCELAR
   let primeiraCartaJ = comprarCarta();
   let segundaCartaJ = comprarCarta();
   let primeiraCartaM = comprarCarta();
   let segundaCartaM = comprarCarta();

   pontosJ = primeiraCartaJ.valor + segundaCartaJ.valor
   pontosM = primeiraCartaM.valor + segundaCartaM.valor

   console.log(`Cartas Jogador: ${primeiraCartaJ.texto} ${segundaCartaJ.texto} Pontos: ${pontosJ}`)
   console.log(`Cartas Maquina: ${primeiraCartaM.texto} ${segundaCartaM.texto} Pontos: ${pontosM}`)

   if (pontosJ > pontosM) {
      console.log("Usuário Ganhou")
   }
   else if (pontosJ < pontosM) {
      console.log("Máquina ganhou")
   }
   else {
      console.log("Empate")
   }
}

else {
   console.log("Jogo Cancelado")
}

*/
