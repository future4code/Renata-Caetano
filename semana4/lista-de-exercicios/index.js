//EXERCICIOS DE ESCRITA
//01- Tem uma função para converter valor de dólar em real solicitando ao usuário a cotação do dia.Escrevendo na tela o resultado de 100 vezes a cotação digitada, mostrando o valor em real.

// 02-Tenho uma função que se chama investe dinheiro e nela existem tipos de parametros,que é tipo de
// investimento e o valor, e tem uma variavel que guarda valor apos investimento.
// existes casos para escolher o tipo de investimento e se ele for escolhido 
// possui a fórmula do que é para ser feito. e retorna o valor para a variavel responsável valorAposInvestimento.
// NovoMontante executa a função com valor 150 em ações e o segundo montante executa o alerta pois não há o tipo de investimento no case.

// 03 - Possui 03 array, uma com valores e duas sem valores.
// Para  o numero do array se ele for dividido por 2 com resto 0 guarde ele no array1 senão guarde no array2
// Escreva "Quantidade total de numeros , tamanho do array numeros"
// Escreva tamanho do array1
// Escreva o tamanho do array2 

// //04 - Temos 1 array com valores e duas variaveis que se chamam numero1 recebendo valor infinito
// e outra que se chama numero2 recebendo o valor 0.
// no laço ele ira chamar o numero do array numeros e se o numero for menor que o infinito ele irá escrever 
// o valor no console.
//outro caso é se este valor do array numeros for maior que 0 ele irá escrever este valor.
// Observação no caso 02 ele só não irá escrever o numero -10.


//************************************EXERCICIOS DE LÓGICA***************************************************

//01->> 3 maneiras de percorrer lista é : For - for of  - while

// const alunos =['Renata','Rodrigo','Vanessa','Ana,Diana','Priscila','Alexandre','Jean','Caetano']

//     for(let i=0 ; i < alunos.length; i++)//indice iniciando no 0 enquanto indice for menor que o tamanho do array repita
//     {
//         const nomesGeral = alunos[i] // esta variavel vai guardar os valores do indice
//         console.log(nomesGeral) // escreve variavel que guardou o valor do indice do array
// }

//02->>

    // A -> false
    // B -> false
    // C -> true
    // D -> true
    // E -> true

//03->> este código não funciona pois falta alguns topicos como sinal de '=','[]','um valor','i++'
//e na condição tem que sair sinal de = para ´pegar apenas a quantidade desejada.

// const quantidadeDeNumerosPares=[5]
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }


//04->> 
/*
const a=Number(prompt('Digite o primeiro valor para a lateral do triangulo'))
const b=Number(prompt('Digite o segundo valor para a lateral do triangulo'))
const c=Number(prompt('Digite o terceiro valor para a lateral do triangulo'))

function trigonometria(a,b,c){
    
    if (a===b && b===c){
        console.log('Equilatero');
     }
     else if((a !== b) && (b !== c) && (a !== c)) {
        console.log('Escaleno');
     }
     else{
        console.log('Isósceles');
     }

}
trigonometria(a,b,c);
*/

//05->>
const a=Number(prompt('Digite uma valor'))
const b=Number(prompt('Digite o segundo valor' ))

let arrayNumero = [a,b]
let valorMaior = 0
let valorMenor = 0



for(let i=0 ;i < arrayNumero.length; i++){
    if (arrayNumero[i] > valorMaior ){
    valorMaior=arrayNumero[i]
}else{
 valorMenor=arrayNumero[i]
}
}

console.log ('ENTRADA:')
console.log(`os valores digitados são :${a} e ${b}`)
console.log ('SAIDA:')
console.log(`O valor maior é : ${valorMaior}`)

if (valorMaior % valorMenor === 0)
{
  console.log(`o numero ${valorMaior} é divisivel por ${valorMenor}`) 
}
else{

    console.log(`o numero ${valorMenor} não divisivel por ${valorMaior}`) 
}
