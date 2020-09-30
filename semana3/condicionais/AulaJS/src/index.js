//**Exercícios de interpretação de código**

//EXERCÍCIO 1

/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/

/*Explique o que o código faz. Qual o teste que ele realiza?
    O código peegunta ao usuario um número, pega essa resposta e converte em número 
    para guardar numa variavel, e a condição é: se o número digitado dividido por 2 restar 0
    a mensagem é Passou no teste senão Não passou no teste.*/

/*Para que tipos de números ele imprime no console "Passou no teste"?
    Números pares que divididos por 2 restam 0*/

/*Para que tipos de números a mensagem é "Não passou no teste"?
    Números ímpares que dividido por 2 obtem resto maior que 0*/

//EXERCÍCIO 2

/*O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas 
de um supermercado. Veja abaixo:*/

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/

//a. Para que serve o código acima?
// O código  possui condição composta.

//b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//O preço da fruta  Maçã  é  R$  2.25

/*c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se
retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA
O ITEM c.")?
 ****Se retiramos o breack ele continua para a próxima sentença e se nada se encaixa ele para no default.  */ 


//EXERCÍCIO 3

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/

//a. O que a primeira linha está fazendo?
//Está fazendo uma pergunta ao usuário e convertendo a resposta em número

//b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Qualquer número maior que 0 mostrará a mensagem Esse número passou no teste,
//Qualquer número menor que 0 dará erro pois está sem condição para ele.

/*c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
 A variavel foi criada dentro do escopo e foi chamada fora do escopo*/

//**Exercícios de escrita de código**

//EXERCÍCIO 4

/*let idade= Number (prompt ("Qual sua idade? "))
 
if(idade >= 18){
    console.log("Você pode dirigir")
}
else{
    console.log("Você não pode dirigir")
} */

//EXERCÍCIO 5 
/*const turno = prompt("Digite a letra do seu turno: M (MATUTINO), V (VESPERTINO), N (NOTURNO)").toUpperCase()
if(turno ==="M"){ console.log("Bom dia !!!")}
else if (turno ==="V"){ console.log("Boa Tarde!!!")}
else if(turno==="N"){ console.log("Boa Noite!!")}*/


//EXERCÍCIO 6

/*const turno = prompt("Digite a letra do seu turno: M (MATUTINO), V (VESPERTINO), N (NOTURNO)").toUpperCase()
 
switch (turno) {
    case "M":
        console.log("Bom dia !!! ")
        break;
    case "V":

        console.log("Boa Tarde !!! ")
        break;
    case "N":
        console.log("Boa Noite !!! ")
        break;
    default:
        console.log("Olá, digite o turno correto !!! ")
}*/

//EXERCÍCIO 7

/*const filme = prompt("Qual gênero de filme vai assistir?")
const valor = Number(prompt("Qual valor do filme?"))

if((filme ==="Fantasia")&&(valor===15)){ 
    console.log("Bom filme! Seu amigo topa! ")}

else { console.log("Escolha outro filme se quiser companhia do seu amigo rsrsrs")}*/

//DESAFIO 1 - 


/*const filme = prompt("Qual gênero de filme vai assistir?")
const valor = Number(prompt("Qual valor do filme?"))


if((filme ==="Fantasia ")&&(valor===15))
{
    let petisco = prompt("O que deseja comer? Pipoca, chocolate ou doce ")
    console.log(`Bom filme com ${petisco}`)}

else { console.log("Escolha outro filme se quiser companhia do seu amigo rsrsrs")}*/


//DESAFIO 2
let preco 
const nome = prompt("Digite seu nome: ")
const tipo = prompt("Digite o tipo de jogo IN (internacional) DO (doméstico) ")
const etapa= prompt("Digite a etapa do jogo SF(semi-final) DT(decisão de terceiro lugar) FI(final)")
const categoria = Number(prompt("Digite a categoria: 1, 2, 3, 4 "))
const quantidade = Number(prompt("Digite a quantidade de ingressos desejados"))
let valor
 

switch (tipo) {
    
case tipo==="DO" && etapa==="SF" && categoria=== 1:

    valor = 1320
    valorTotal = (valor*quantidade)
break;


case tipo==="DO" && etapa==="SF" && categoria=== 2:

    valor = 880
    valorTotal = (valor*quantidade)
break;

case tipo==="DO" && etapa==="SF" && categoria=== 3:

    valor = 550
    valorTotal = (valor*quantidade)
break;

case tipo==="DO" && etapa==="SF" && categoria=== 4:

    valor = 220
    valorTotal = (valor*quantidade)
break;

case tipo==="DO" && etapa==="DT" && categoria=== 1:

    valor = 660
    valorTotal = (valor*quantidade)
break;

case tipo==="DO" && etapa==="DT" && categoria=== 2:

    valor = 440
    valorTotal = (valor*quantidade)
break;

case tipo==="DO" && etapa==="DT" && categoria=== 3:

    valor = 330
    valorTotal = (valor*quantidade)
break;
case tipo==="DO" && etapa==="DT" && categoria=== 4:

    valor = 170
    valorTotal = (valor*quantidade)
break;

case tipo==="DO" && etapa==="FI" && categoria=== 1:

    valor = 1980
    valorTotal = (valor*quantidade)
break;

case tipo==="DO" && etapa==="FI" && categoria=== 2:

    valor = 1320
    valorTotal = (valor*quantidade)
break;

case tipo==="DO" && etapa==="FI" && categoria=== 3:

    valor = 880
    valorTotal = (valor*quantidade)
break;

case tipo==="DO" && etapa==="FI" && categoria=== 4:

    valor = 330
    valorTotal = (valor*quantidade)
break;

}
console.log(`---Dados da compra--- \n Nome:${nome} \n Tipo de jogo: ${tipo} \n Etapa do jogo: ${etapa} \n Catergoria: ${categoria} \n Quantidade: ${quantidade} \n ----Valores ----- \n valor unitario: ${valor} \n Valor Total: ${valor*quantidade}`)
