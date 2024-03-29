//--------------- EXERCICIO 01 ---------------
//Considere que a gente só possa fazer três operações com string: adicionar um caractere a ele, remover um caractere dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma string é  'one edit' de outra.
var checkOneEdit = function (stringA, stringB) {
    if (stringA === stringB.substr(0, stringB.length - 1)) {
        return true;
    }
    if (stringA.substr(0, stringA.length - 1) === stringB) {
        return true;
    }
    var count = 0;
    for (var index = 0; index < stringA.length; index++) {
        if (stringA[index] !== stringB[index]) {
            count++;
        }
    }
    if (count === 1) {
        return true;
    }
    return false;
};
console.log(checkOneEdit('banan', 'banana')); // true
console.log(checkOneEdit('bananak', 'banana')); // true
console.log(checkOneEdit('panana', 'banana')); // true
console.log(checkOneEdit('bananaaa', 'banana')); // false
