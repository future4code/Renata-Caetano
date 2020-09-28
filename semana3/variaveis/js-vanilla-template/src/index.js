/* EXERCICIO DE INTERPRETAÇÃO

1- 

a = 10
b = 10

console.log(b) "ELE VAI IMPRIMIR O VALOR DE 10"

b = 5
console.log(a, b) "ELE VAI IMPRIMIR O VALOR DE (10 5)"

2- 
a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)
" ELE VAI IMPRIMIR OA VALORES (10 10 10)"

*/

// EXERCICIO DE ESCRITA 01-
/*
let nome = prompt('Qual seu nome')
let idade = prompt('Qual sua idade')

console.log(typeof nome, typeof idade)


// R letra C: Não foi declarado valores para as variáveis e por isso são undefined

// R letra E: Foi impresso duas strings pois foi solicitado para usuário digitar as informações

console.log(`Olá ${nome}, você tem ${idade}anos`)*/


// EXERCICIO DE ESCRITA 02-
/*
let nome= prompt ("Qual seu nome");
console.log(`Qual seu nome? ${nome}`)

let idade= prompt ("Qual sua idade");
console.log(`Qual sua idade? ${idade}`)

let cidade= prompt ("Qual cidade você mora");
console.log(`Qual cidade você mora? ${cidade}`)

let estado= prompt ("Qual estado você mora");
console.log(`Qual estado você mora? ${estado}`)

let estuda= prompt ("Você estuda na Labenu?");
console.log(`Você estuda na Labenu? ${estuda}`)*/

//EXERCICIO 03-

let arrayDeComida = ["macarrao","lasanha","pizza","sushi","sashimi"]
//console.log("Essas são minhas comidas favoridas", arrayDeComida[0,1,2,3,4])

/*console.log("Essas são minhas comidas favoridas:", arrayDeComida[0])
console.log("Essas são minhas comidas favoridas:", arrayDeComida[1])
console.log("Essas são minhas comidas favoridas:", arrayDeComida[2])
console.log("Essas são minhas comidas favoridas:", arrayDeComida[3])
console.log("Essas são minhas comidas favoridas:", arrayDeComida[4])

let comida= prompt ("Qual sua comida preferida?")
arrayDeComida [1] = comida

console.log("Essas são minhas comidas favoridas:", arrayDeComida[0])
console.log("Essas são minhas comidas favoridas:", arrayDeComida[1])
console.log("Essas são minhas comidas favoridas:", arrayDeComida[2])
console.log("Essas são minhas comidas favoridas:", arrayDeComida[3])
console.log("Essas são minhas comidas favoridas:", arrayDeComida[4])*/


//EXERCICIO 04-

let arrayPergunta = ["Você está feliz?","Você se acha inteligente?","Você é jovem?"]

let arrayResposta = [true,true,true]

console.log(`\n ${arrayPergunta[0]} ${arrayResposta[0]} \n ${arrayPergunta[1]} ${arrayResposta[1]} \n ${arrayPergunta[2]} ${arrayResposta[2]}`)



