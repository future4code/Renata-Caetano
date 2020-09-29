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
listaDeTarefas=[]
//b
/*let tarefaOne = prompt ("Cite a primiera tarefa que precisa realizar :")
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
