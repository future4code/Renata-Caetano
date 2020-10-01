//INTERPRETAÇÃO

//EXERCICIO 01 - 
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)*/

//RESPOSTA : ENQUANTO O VALOR FOR MENOR QUE 5 ELE FAZ O LOOP SOMANDO COM O PROXIMO VALOR MOSTRANDO 10 NO FINAL

//EXERCICIO 02-
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}*/

//RESPOSTA - A - 19,21,23,25,27,30
//RESPOSTA - B - não poderia ter numero>18 par poder acessar todos.

//***********************

//EXERCICIOS DE ESCRITA

//EXERCICIO 03 - A
/*
const arrayOriginal=[40,30,300,400,50,60,70,80,90,100]
for (let numero of arrayOriginal) {
    if (numero ) {
		console.log(numero)
	}
}*/

//EXERCICIO 03 - B
/*const arrayOriginal=[40,30,300,400,50,60,70,80,90,100]

for (let numero of arrayOriginal) {
  if (numero) {
		console.log(numero / 10)
	}
}*/

//EXERCICIO 03 - C

/*let arrayOriginal=[40,30,305,455,57,60,70,83,90,100]
let numeroPar = []

for (let numero of arrayOriginal) {
  if (numero%2 ===0) {
		numeroPar.push(numero)
    }
}
console.log(numeroPar)*/

//EXERCICIO 03 - D
/*let novoArray=["1","2","3"]
console.log(novoArray)*/

//EXERCICIO 03 - E
/*let arrayOriginal=[40,30,305,455,57,60,70,83,90,100]
let menorNum = arrayOriginal[0]
let maiorNum = arrayOriginal[0]

    for(let i= 0;  i<arrayOriginal.length; i++) 
    {
        let conteudo=arrayOriginal[i]
        if (menorNum>conteudo){menorNum=conteudo}
        else if(maiorNum<conteudo){maiorNum=conteudo}
        else{}
             
    }
        console.log("O menor numero é :"+ menorNum )
        console.log("O maior numero é " + maiorNum)*/

    
    



