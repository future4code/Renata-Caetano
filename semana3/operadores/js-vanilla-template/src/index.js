//**Exercícios de interpretação de código** 01

/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) ---> RESPOSTA -->a. False

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)---> RESPOSTA -->b. True

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)---> RESPOSTA-->c. True

console.log("e. ", typeof resultado)---> RESPOSTA -->e. String*/

//**Exercícios de interpretação de código** 02

/*let array
console.log('a. ', array)--> RESPOSTA --->a. undefined

array = null
console.log('b. ', array)--> RESPOSTA ---> b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)--> RESPOSTA ---> c. 11

let i = 0
console.log('d. ', array[i])--> RESPOSTA ---> d. 0

array[i+1] = 19
console.log('e. ', array)--> RESPOSTA --->e.19

const valor = array[i+6]
console.log('f. ', valor)--> RESPOSTA --->f. 6*/


//Exercícios de escrita de código 01


//a 
/*const idade=prompt ("Qual sua idade?")
//b
const idadeAmigo=prompt ("Qual a idade do seu amigo?")
//c 
let idades= idade >= idadeAmigo
console.log("Sua idade é maior do que a do seu amigo? "+ idades)

//d 
const diferenca = Number(idade)- Number(idadeAmigo)  
console.log("A diferença de idade é: " , diferenca )*/

//Exercícios de escrita de código 02

//a

/*let numeroPar= prompt("Digite um número par:")
 
const numeroParnumber= Number(numeroPar)

//b
console.log (numeroParnumber % 2)*/

//c Ele me retornou 0 para todas as operções pois todo numero par dividio por 2 não tem possue resto.

//d Se o usuário colocar número impar o resto será 1

//Exercícios de escrita de código 03

//a 
/*listaDeTarefas=[]
//b
let tarefaOne = prompt ("Cite a primiera tarefa que precisa realizar :")
listaDeTarefas.push(tarefaOne)
let tarefaTwo = prompt ("Cite a segunda tarefa que precisa realizar :")
listaDeTarefas.push(tarefaTwo)
let tarefaThree = prompt ("Cite a terceira tarefa que precisa realizar :")
listaDeTarefas.push(tarefaThree)
//c
console.log(listaDeTarefas)
//d
let tarefasRealizadas=prompt ("Cite o indice de um tarefa realizada 0, 1 ou 2")
//e 
let i= tarefasRealizadas
listaDeTarefas.splice(i,1)
//f
console.log(listaDeTarefas)*/

//Exercícios de escrita de código 04

/*const nome=prompt("Digite seu nome: ")

const email= prompt("Digite seu email: ")

console.log("O email "+ email + " do usuário foi cadastrado com sucesso. "+ "Seja bem vinda "+ nome)*/


//Desafios Extras 

//1 - 
//A  - Graus Fahrenheit(°F) para Kelvin(K) 
/*
let perguntaGrau= prompt("Digite um valor em Graus Fahrenheit para converter em  Kelvin:")
let valorDigitado = Number(perguntaGrau)
let grausF = valorDigitado
let conversao= (grausF - 32)*5/9 + 273.15
console.log(conversao)*/


//B - Graus Celsius(°C) para Graus Fahrenheit 
/*
let perguntaGrau= prompt("Digite um valor em Graus Celsius para converter em Graus Fahrenheit:")
let valorDigitado = Number(perguntaGrau)
let grausC = valorDigitado
let conversao= (grausC)*9/5 + 32
console.log(conversao)*/


//C - D - Calcule e mostre o valor de °C em °F e K, mostrando as unidades no console também.
/*let perguntaGrauCelsius= prompt("Digite um valor em Graus Celsius ")
let valorDigitado = Number(perguntaGrauCelsius)
let grausC = valorDigitado
let conversaoCparaF= (grausC)*9/5 + 32
let conversaoCparaK= (grausC)+ 273.15
console.log(`O valor digitado é : ${valorDigitado}ºC , convertido em Fahrenheit fica: ${conversaoCparaF}ºF`)
console.log(`O valor digitado é : ${valorDigitado}ºC , convertido em Kelvin fica: ${conversaoCparaK}K`)*/

/* 2 - Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica
 em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. 
 Faça um programa que receba a quantidade de quilowatts consumida por uma residência.*/

//A - Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;

/*const valorQh = 0.05
let perguntaConsumo= prompt("Digite o consumo de Quilowatts ")
let consumo =  Number(perguntaConsumo)
let valorCobrado= consumo*valorQh
console.log ('O valor cobrado será R$' + valorCobrado)*/

//B - 
/*const valorQh = 0.05
let perguntaConsumo= prompt("Digite o consumo de Quilowatts ")
let consumo =  Number(perguntaConsumo)
let valorCobrado= (consumo*valorQh)

let valorDesconto = valorCobrado * 0.15
let valorFinal = valorCobrado - valorDesconto
console.log ('O valor cobrado com 15% de desconto será R$' + valorFinal)*/
